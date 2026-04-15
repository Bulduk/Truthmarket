## FAZ 2: Veritabanı Kurulumu

### Adım 2.1 - Core SQL Dosyaları
- `001_extensions.sql`: PostgreSQL için gerekli eklentiler (uuid-ossp, pgcrypto, pg_trgm, btree_gin, timescaledb, pg_stat_statements, unaccent) ve migration tablosu tanımlandı.
- `002_enums.sql`: Sistem genelinde kullanılacak tüm ENUM tipleri (user_type, content_type, market_status, signal_position_type vb.) tanımlandı.
- `003_functions.sql`: Veritabanı seviyesinde çalışacak trigger ve yardımcı fonksiyonlar (update_updated_at, soft_delete, increment_counter, calculate_signal_strength, calculate_odds, update_market_odds) oluşturuldu.
