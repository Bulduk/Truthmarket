-- 001_extensions.sql
-- Gerekli PostgreSQL eklentilerini ve migration tracking tablosunu oluşturur.

-- UUID üretimi için
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Şifreleme ve hash işlemleri için
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Metin arama ve benzerlik (trigram) için
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- GIN indexleri için btree desteği
CREATE EXTENSION IF NOT EXISTS "btree_gin";

-- Zaman serisi verileri için (Market fiyat geçmişi vb.)
CREATE EXTENSION IF NOT EXISTS "timescaledb";

-- Sorgu performansı analizi için
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";

-- Aksanları kaldırmak ve gelişmiş arama için
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- Migration takibi için tablo
CREATE TABLE IF NOT EXISTS schema_migrations (
    version VARCHAR(255) PRIMARY KEY,
    applied_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
