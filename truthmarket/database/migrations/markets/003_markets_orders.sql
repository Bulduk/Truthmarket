-- 003_markets_orders.sql

CREATE TABLE IF NOT EXISTS market_orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    order_type order_type NOT NULL,
    outcome VARCHAR(50) NOT NULL, -- 'YES' or 'NO'
    
    price DECIMAL(10,4) NOT NULL,
    amount DECIMAL(20,8) NOT NULL,
    filled_amount DECIMAL(20,8) DEFAULT 0,
    
    status order_status DEFAULT 'OPEN',
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_market_orders_updated_at ON market_orders;
CREATE TRIGGER update_market_orders_updated_at
    BEFORE UPDATE ON market_orders
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
