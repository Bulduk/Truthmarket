-- 009_markets_indexes.sql

-- Markets tablosu indexleri
CREATE INDEX IF NOT EXISTS idx_markets_category ON markets(category);
CREATE INDEX IF NOT EXISTS idx_markets_status ON markets(status);
CREATE INDEX IF NOT EXISTS idx_markets_end_time ON markets(end_time);
CREATE INDEX IF NOT EXISTS idx_markets_creator_id ON markets(creator_id);
CREATE INDEX IF NOT EXISTS idx_markets_created_at ON markets(created_at DESC);

-- Trigram index for market search
CREATE INDEX IF NOT EXISTS idx_markets_title_trgm ON markets USING gin (title gin_trgm_ops);

-- Positions indexleri
CREATE INDEX IF NOT EXISTS idx_market_positions_user_id ON market_positions(user_id);
CREATE INDEX IF NOT EXISTS idx_market_positions_market_id ON market_positions(market_id);

-- Orders indexleri
CREATE INDEX IF NOT EXISTS idx_market_orders_market_id ON market_orders(market_id);
CREATE INDEX IF NOT EXISTS idx_market_orders_user_id ON market_orders(user_id);
CREATE INDEX IF NOT EXISTS idx_market_orders_status ON market_orders(status);

-- Trades indexleri
CREATE INDEX IF NOT EXISTS idx_market_trades_market_id ON market_trades(market_id);
CREATE INDEX IF NOT EXISTS idx_market_trades_maker_id ON market_trades(maker_id);
CREATE INDEX IF NOT EXISTS idx_market_trades_taker_id ON market_trades(taker_id);
CREATE INDEX IF NOT EXISTS idx_market_trades_created_at ON market_trades(created_at DESC);

-- Liquidity indexleri
CREATE INDEX IF NOT EXISTS idx_market_liquidity_market_id ON market_liquidity_providers(market_id);
CREATE INDEX IF NOT EXISTS idx_market_liquidity_user_id ON market_liquidity_providers(user_id);
