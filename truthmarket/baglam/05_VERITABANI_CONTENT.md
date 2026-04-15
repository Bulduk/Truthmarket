## FAZ 2: Veritabanı Kurulumu

### Adım 2.4 - Content SQL Dosyaları
- `001_content_registry.sql`: Sistemdeki tüm içeriklerin (Video, Makale, Ses vb.) ortak özelliklerini (başlık, yazar, görüntülenme, sinyal gücü) ve Signal Market bağlantısını tutan ana kayıt tablosu oluşturuldu.
- `002_video_content.sql`: Video türündeki içeriklere özel (süre, çözünürlük, viral katsayısı) verileri tutan tablo oluşturuldu.
- `003_article_content.sql`: Makale türündeki içeriklere özel (markdown gövde, okuma süresi, kaynak linkleri) verileri tutan tablo oluşturuldu.
- `004_other_content_types.sql`: Sistemde tanımlı diğer içerik türlerine (Audio, Photo, Analysis, News, Product, Person) ait özel verileri tutan tablolar oluşturuldu.
- `005_content_indexes.sql`: İçerik tabloları için gerekli B-Tree ve GIN (metin arama) indexleri oluşturuldu.
