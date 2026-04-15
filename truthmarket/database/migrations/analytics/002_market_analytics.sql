-- 002_market_analytics.sql

CREATE TABLE IF NOT EXISTS market_analytics_daily (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    
    daily_volume DECIMAL(20,8) DEFAULT 0,
    trade_count INTEGER DEFAULT 0,
    unique_traders INTEGER DEFAULT 0,
    
    liquidity_added DECIMAL(20,8) DEFAULT 0,
    liquidity_removed DECIMAL(20,8) DEFAULT 0,
    
    open_interest DECIMAL(20,8) DEFAULT 0,
    
    yes_price_open DECIMAL(10,4),
    yes_price_close DECIMAL(10,4),
    yes_price_high DECIMAL(10,4),
    yes_price_low DECIMAL(10,4),
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(market_id, date)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_market_analytics_daily_updated_at ON market_analytics_daily;
CREATE TRIGGER update_market_analytics_daily_updated_at
    BEFORE UPDATE ON market_analytics_daily
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- Convert to TimescaleDB hypertable if extension is enabled
-- SELECT create_hypertable('market_analytics_daily', 'date', if_not_exists => TRUE);
