-- 010_signal_markets.sql
-- Sistem Talimatı Ek v2.0'dan alınmıştır.

CREATE TABLE IF NOT EXISTS signal_markets (
    id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id          UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    content_type        VARCHAR(50) NOT NULL,
    market_type         VARCHAR(50) NOT NULL,
    signal_strength     DECIMAL(5,2) DEFAULT 0,
    amplify_volume      DECIMAL(20,8) DEFAULT 0,
    dampen_volume       DECIMAL(20,8) DEFAULT 0,
    spike_volume        DECIMAL(20,8) DEFAULT 0,
    fade_volume         DECIMAL(20,8) DEFAULT 0,
    amplify_odds        DECIMAL(10,4) DEFAULT 2.0,
    dampen_odds         DECIMAL(10,4) DEFAULT 2.0,
    spike_odds          DECIMAL(10,4) DEFAULT 10.0,
    fade_odds           DECIMAL(10,4) DEFAULT 5.0,
    total_volume        DECIMAL(20,8) DEFAULT 0,
    participant_count   INTEGER DEFAULT 0,
    status              VARCHAR(50) DEFAULT 'active',
    resolution_metric   JSONB,
    oracle_source       VARCHAR(100),
    start_time          TIMESTAMPTZ NOT NULL,
    end_time            TIMESTAMPTZ NOT NULL,
    resolved_at         TIMESTAMPTZ,
    resolution_data     JSONB,
    winning_position    VARCHAR(50),
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_signal_markets_updated_at ON signal_markets;
CREATE TRIGGER update_signal_markets_updated_at
    BEFORE UPDATE ON signal_markets
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- Trigger for odds calculation
DROP TRIGGER IF EXISTS update_signal_markets_odds ON signal_markets;
CREATE TRIGGER update_signal_markets_odds
    BEFORE UPDATE OF amplify_volume, dampen_volume, spike_volume, fade_volume ON signal_markets
    FOR EACH ROW
    EXECUTE FUNCTION update_market_odds();

-- Circular dependency resolution for content_registry
ALTER TABLE content_registry 
ADD CONSTRAINT fk_content_signal_market 
FOREIGN KEY (signal_market_id) REFERENCES signal_markets(id) ON DELETE SET NULL;
