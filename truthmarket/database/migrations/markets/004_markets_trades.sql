-- 004_markets_trades.sql

CREATE TABLE IF NOT EXISTS market_trades (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    
    maker_order_id UUID REFERENCES market_orders(id),
    taker_order_id UUID REFERENCES market_orders(id),
    
    maker_id UUID NOT NULL REFERENCES users(id),
    taker_id UUID NOT NULL REFERENCES users(id),
    
    outcome VARCHAR(50) NOT NULL,
    price DECIMAL(10,4) NOT NULL,
    amount DECIMAL(20,8) NOT NULL,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
