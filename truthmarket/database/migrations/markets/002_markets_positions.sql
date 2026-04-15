-- 002_markets_positions.sql

CREATE TABLE IF NOT EXISTS market_positions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    outcome VARCHAR(50) NOT NULL, -- 'YES' or 'NO'
    shares DECIMAL(20,8) NOT NULL DEFAULT 0,
    avg_price DECIMAL(10,4) NOT NULL,
    realized_pnl DECIMAL(20,8) DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(market_id, user_id, outcome)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_market_positions_updated_at ON market_positions;
CREATE TRIGGER update_market_positions_updated_at
    BEFORE UPDATE ON market_positions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
