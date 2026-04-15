## FAZ 2: Veritabanı Kurulumu

### Adım 2.9 - Notifications SQL Dosyaları
- `001_notifications_table.sql`: Kullanıcılara gönderilen uygulama içi (in-app) bildirimleri tutan tablo oluşturuldu.
- `002_push_tokens.sql`: Mobil ve web push bildirimleri gönderebilmek için kullanıcıların cihaz token'larını tutan tablo oluşturuldu.
- `003_email_logs.sql`: Sistemden gönderilen e-postaların (hoş geldin, şifre sıfırlama, market sonuçları vb.) durumlarını ve loglarını tutan tablo oluşturuldu.
- `004_notification_indexes.sql`: Bildirim tabloları için gerekli performans indexleri (özellikle okunmamış bildirimleri hızlı getirmek için partial index) oluşturuldu.

**Not:** Bu adımla birlikte FAZ 2 (Veritabanı Kurulumu) tamamlanmıştır. Sistemdeki tüm tablolar, ilişkiler, trigger'lar ve indexler hazır durumdadır.
