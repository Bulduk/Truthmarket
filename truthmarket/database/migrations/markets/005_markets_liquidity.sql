-- 005_markets_liquidity.sql

CREATE TABLE IF NOT EXISTS market_liquidity_providers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    liquidity_amount DECIMAL(20,8) NOT NULL,
    pool_shares DECIMAL(20,8) NOT NULL,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_market_liquidity_updated_at ON market_liquidity_providers;
CREATE TRIGGER update_market_liquidity_updated_at
    BEFORE UPDATE ON market_liquidity_providers
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
