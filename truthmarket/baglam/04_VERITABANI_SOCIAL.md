## FAZ 2: Veritabanı Kurulumu

### Adım 2.3 - Social SQL Dosyaları
- `001_posts_table.sql`: Kullanıcıların oluşturduğu postları (gönderileri) tutan tablo oluşturuldu.
- `002_posts_interactions.sql`: Postlara yapılan beğeni, kaydetme, paylaşma gibi etkileşimleri tutan tablo oluşturuldu.
- `003_comments_table.sql`: Postlara yapılan yorumları ve alt yorumları (parent_id ile) tutan tablo oluşturuldu.
- `004_hashtags_table.sql`: Sistemdeki hashtagleri ve post-hashtag ilişkisini tutan tablolar oluşturuldu.
- `005_messages_table.sql`: Kullanıcılar arası doğrudan mesajlaşma (DM) verilerini tutan tablo oluşturuldu.
- `006_media_table.sql`: Postlara veya mesajlara eklenen medya dosyalarının (resim, video vb.) bilgilerini tutan tablo oluşturuldu.
- `007_reports_table.sql`: Kullanıcıların içerikleri veya diğer kullanıcıları şikayet ettiği raporları tutan tablo oluşturuldu.
- `008_social_indexes.sql`: Sosyal tablolar için gerekli performans indexleri oluşturuldu.
