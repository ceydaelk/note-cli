const fs = require('fs');
const path = require('path');

const FILE_PATH = 'notlar.json';

function initializeFile() {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2));
    }
}

function addNote(content) {
    try {
        initializeFile();
        const notes = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
        const newNote = {
            id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1,
            content: content
        };
        notes.push(newNote);
        fs.writeFileSync(FILE_PATH, JSON.stringify(notes, null, 2));
        console.log(`Not başarıyla eklendi! ID: ${newNote.id}`);
    } catch (error) {
        console.error('Not eklenirken bir hata oluştu:', error.message);
    }
}

function listNotes() {
    try {
        initializeFile();
        const notes = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
        if (notes.length === 0) {
            console.log('Henüz hiç not eklenmemiş.');
            return;
        }
        console.log('\n===== NOTLAR =====');
        notes.forEach(note => {
            console.log(`${note.id} - ${note.content}`);
        });
    } catch (error) {
        console.error('Notlar listelenirken bir hata oluştu:', error.message);
    }
}

function deleteNote(id) {
    try {
        initializeFile();
        let notes = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
        const initialLength = notes.length;
        notes = notes.filter(note => note.id !== parseInt(id));
        
        if (notes.length === initialLength) {
            console.log(`${id} ID'li not bulunamadı.`);
            return;
        }
        
        fs.writeFileSync(FILE_PATH, JSON.stringify(notes, null, 2));
        console.log(`${id} ID'li not başarıyla silindi.`);
    } catch (error) {
        console.error('Not silinirken bir hata oluştu:', error.message);
    }
}

function main() {
    const command = process.argv[2];
    const argument = process.argv[3];

    switch (command) {
        case 'ekle':
            if (!argument) {
                console.log('Lütfen bir not içeriği girin.');
                return;
            }
            addNote(argument);
            break;
        case 'listele':
            listNotes();
            break;
        case 'sil':
            if (!argument) {
                console.log('Lütfen silinecek notun ID\'sini girin.');
                return;
            }
            deleteNote(argument);
            break;
        default:
            console.log('Geçersiz komut. Kullanılabilir komutlar: ekle, listele, sil');
    }
}

main(); 