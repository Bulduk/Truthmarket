-- 003_functions.sql
-- Veritabanı seviyesinde çalışacak trigger ve yardımcı fonksiyonlar.

-- 1. update_updated_at() Trigger Fonksiyonu
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. soft_delete() Trigger Fonksiyonu
CREATE OR REPLACE FUNCTION soft_delete()
RETURNS TRIGGER AS $$
BEGIN
    NEW.deleted_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. increment_counter() Fonksiyonu (Dinamik)
CREATE OR REPLACE FUNCTION increment_counter(
    target_table text, 
    target_column text, 
    target_id uuid, 
    amount int DEFAULT 1
)
RETURNS void AS $$
BEGIN
    EXECUTE format(
        'UPDATE %I SET %I = %I + $1 WHERE id = $2',
        target_table, target_column, target_column
    ) USING amount, target_id;
END;
$$ LANGUAGE plpgsql;

-- 4. calculate_signal_strength() Fonksiyonu
CREATE OR REPLACE FUNCTION calculate_signal_strength(
    engagement_rate numeric,
    velocity_score numeric,
    source_quality numeric,
    network_reach numeric,
    sentiment_score numeric
)
RETURNS numeric AS $$
BEGIN
    RETURN (
        (engagement_rate * 0.30) +
        (velocity_score * 0.25) +
        (source_quality * 0.20) +
        (network_reach * 0.15) +
        (sentiment_score * 0.10)
    );
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 5. calculate_odds() Fonksiyonu
CREATE OR REPLACE FUNCTION calculate_odds(
    volume_a numeric,
    volume_b numeric
)
RETURNS numeric AS $$
DECLARE
    total_volume numeric;
BEGIN
    total_volume := volume_a + volume_b;
    IF total_volume = 0 THEN
        RETURN 0.5; -- Default 50/50
    END IF;
    RETURN volume_a / total_volume;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 6. update_market_odds() Trigger Fonksiyonu
CREATE OR REPLACE FUNCTION update_market_odds()
RETURNS TRIGGER AS $$
BEGIN
    -- Toplam hacim hesaplama
    NEW.total_volume = NEW.amplify_volume + NEW.dampen_volume + NEW.spike_volume + NEW.fade_volume;
    
    -- Odds hesaplama (Basit AMM mantığı)
    IF NEW.total_volume > 0 THEN
        NEW.amplify_odds = NEW.total_volume / NULLIF(NEW.amplify_volume, 0);
        NEW.dampen_odds = NEW.total_volume / NULLIF(NEW.dampen_volume, 0);
        NEW.spike_odds = NEW.total_volume / NULLIF(NEW.spike_volume, 0);
        NEW.fade_odds = NEW.total_volume / NULLIF(NEW.fade_volume, 0);
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
