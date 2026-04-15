-- 004_analytics_indexes.sql

-- User Analytics indexleri
CREATE INDEX IF NOT EXISTS idx_user_analytics_user_id ON user_analytics_daily(user_id);
CREATE INDEX IF NOT EXISTS idx_user_analytics_date ON user_analytics_daily(date DESC);
CREATE INDEX IF NOT EXISTS idx_user_analytics_volume ON user_analytics_daily(trading_volume DESC);

-- Market Analytics indexleri
CREATE INDEX IF NOT EXISTS idx_market_analytics_market_id ON market_analytics_daily(market_id);
CREATE INDEX IF NOT EXISTS idx_market_analytics_date ON market_analytics_daily(date DESC);
CREATE INDEX IF NOT EXISTS idx_market_analytics_volume ON market_analytics_daily(daily_volume DESC);

-- Platform Metrics indexleri
CREATE INDEX IF NOT EXISTS idx_platform_metrics_date ON platform_metrics_daily(date DESC);
