## FAZ 2: Veritabanı Kurulumu

### Adım 2.2 - User SQL Dosyaları
- `001_users_table.sql`: Ana kullanıcı tablosu oluşturuldu. E-posta veya cüzdan adresi zorunluluğu için CHECK constraint eklendi.
- `002_users_sessions.sql`: Kullanıcı oturumlarını (refresh token, cihaz bilgisi) tutacak tablo oluşturuldu.
- `003_users_oauth.sql`: Google, Twitter gibi dış sağlayıcılarla giriş yapan kullanıcıların verilerini tutacak tablo oluşturuldu.
- `004_users_settings.sql`: Kullanıcı bildirim, gizlilik ve tema ayarlarını tutacak tablo oluşturuldu.
- `005_users_kyc.sql`: Müşterini Tanı (KYC) süreçleri için gerekli kimlik ve adres bilgilerini tutacak tablo oluşturuldu.
- `006_users_reputation.sql`: Kullanıcıların itibar puanlarındaki değişimleri tarihçesiyle tutacak tablo oluşturuldu.
- `007_users_follows.sql`: Kullanıcıların birbirini takip etme ilişkilerini tutacak tablo oluşturuldu.
- `008_users_blocks.sql`: Kullanıcı engelleme ilişkilerini tutacak tablo oluşturuldu.
- `009_users_indexes.sql`: Performans için gerekli tüm B-Tree ve GIN (trigram) indexleri oluşturuldu.
