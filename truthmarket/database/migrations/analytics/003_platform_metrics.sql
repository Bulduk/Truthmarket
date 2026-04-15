-- 003_platform_metrics.sql

CREATE TABLE IF NOT EXISTS platform_metrics_daily (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    date DATE NOT NULL UNIQUE DEFAULT CURRENT_DATE,
    
    total_users INTEGER DEFAULT 0,
    daily_active_users INTEGER DEFAULT 0,
    new_users INTEGER DEFAULT 0,
    
    total_volume DECIMAL(20,8) DEFAULT 0,
    total_trades INTEGER DEFAULT 0,
    
    total_value_locked DECIMAL(20,8) DEFAULT 0,
    
    active_markets INTEGER DEFAULT 0,
    new_markets INTEGER DEFAULT 0,
    resolved_markets INTEGER DEFAULT 0,
    
    content_created INTEGER DEFAULT 0,
    signals_generated INTEGER DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_platform_metrics_daily_updated_at ON platform_metrics_daily;
CREATE TRIGGER update_platform_metrics_daily_updated_at
    BEFORE UPDATE ON platform_metrics_daily
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- Convert to TimescaleDB hypertable if extension is enabled
-- SELECT create_hypertable('platform_metrics_daily', 'date', if_not_exists => TRUE);
