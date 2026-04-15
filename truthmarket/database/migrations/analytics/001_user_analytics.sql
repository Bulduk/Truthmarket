-- 001_user_analytics.sql

CREATE TABLE IF NOT EXISTS user_analytics_daily (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    
    session_count INTEGER DEFAULT 0,
    total_session_duration_seconds INTEGER DEFAULT 0,
    
    posts_created INTEGER DEFAULT 0,
    comments_created INTEGER DEFAULT 0,
    likes_given INTEGER DEFAULT 0,
    shares_performed INTEGER DEFAULT 0,
    
    trades_executed INTEGER DEFAULT 0,
    trading_volume DECIMAL(20,8) DEFAULT 0,
    realized_pnl DECIMAL(20,8) DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id, date)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_user_analytics_daily_updated_at ON user_analytics_daily;
CREATE TRIGGER update_user_analytics_daily_updated_at
    BEFORE UPDATE ON user_analytics_daily
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- Convert to TimescaleDB hypertable if extension is enabled
-- SELECT create_hypertable('user_analytics_daily', 'date', if_not_exists => TRUE);
