# note-cli

# Node.js Not Uygulaması

Node.js kullanılarak geliştirilmiş, not oluşturma, listeleme ve silme işlemlerini yapabileceğiniz basit bir komut satırı uygulaması. Uygulama, notları JSON dosyasında saklar ve yönetmek için kullanıcı dostu bir arayüz sunar.

## Özellikler

- 📝 Otomatik artan ID'lerle yeni notlar oluşturma
- 📋 Tüm notları ID'leriyle birlikte listeleme
- 🗑️ ID'ye göre not silme
- 💾 Otomatik dosya oluşturma ve yönetimi
- ⚠️ Tüm işlemler için hata yönetimi

## Gereksinimler

- Node.js (12.0.0 veya daha yüksek sürüm)
- npm (Node Paket Yöneticisi)

## Kurulum

1. Bu depoyu klonlayın veya kaynak kodunu indirin
2. Proje dizinine gidin
3. (İsteğe bağlı) Gelecekte eklenecek bağımlılıkları yüklemek için:
   ```bash
   npm install
   ```

## Kullanım

Uygulama üç ana komut sunar:

### 1. Yeni Not Ekleme

Yeni bir not eklemek için, `ekle` komutunu tırnak içinde not içeriğinizle birlikte kullanın:

```bash
node index.js ekle "Bu benim ilk notum!"
```

Uygulama şu şekilde yanıt verecektir:

```
Not başarıyla eklendi! ID: 1
```

### 2. Tüm Notları Listeleme

Tüm notlarınızı görüntülemek için `listele` komutunu kullanın:

```bash
node index.js listele
```

Çıktı şu şekilde olacaktır:

```
===== NOTLAR =====
1 - Bu benim ilk notum!
2 - Başka bir not daha ekledim
```

### 3. Not Silme

Bir notu silmek için, `sil` komutunu notun ID'si ile birlikte kullanın:

```bash
node index.js sil 2
```

Uygulama şu şekilde yanıt verecektir:

```
2 ID'li not başarıyla silindi.
```

## Dosya Yapısı

- `index.js` - Tüm mantığı içeren ana uygulama dosyası
- `notlar.json` - Notların saklandığı JSON dosyası (otomatik oluşturulur)

## Hata Yönetimi

Uygulama, yaygın senaryolar için hata yönetimi içerir:

- Dosya okuma/yazma hataları
- Geçersiz komutlar
- Eksik parametreler
- Var olmayan not ID'leri

## Örnek İş Akışı

1. İlk notunuzu ekleyin:

   ```bash
   node index.js ekle "Merhaba, bu benim ilk notum!"
   ```

2. Başka bir not ekleyin:

   ```bash
   node index.js ekle "Bu ikinci bir not"
   ```

3. Tüm notları listeleyin:

   ```bash
   node index.js listele
   ```

   Çıktı:

   ```
   ===== NOTLAR =====
   1 - Merhaba, bu benim ilk notum!
   2 - Bu ikinci bir not
   ```

4. İkinci notu silin:

   ```bash
   node index.js sil 2
   ```

   Çıktı:

   ```
   2 ID'li not başarıyla silindi.
   ```

5. Silme işlemini doğrulamak için notları tekrar listeleyin:
   ```bash
   node index.js listele
   ```
   Çıktı:
   ```
   ===== NOTLAR =====
   1 - Merhaba, bu benim ilk notum!
   ```

## Yazar

[Ceyda Elik]
