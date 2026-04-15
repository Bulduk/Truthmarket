-- 005_staking_table.sql

CREATE TABLE IF NOT EXISTS staking_positions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    wallet_id UUID REFERENCES wallets(id),
    
    pool_id VARCHAR(50) NOT NULL,
    amount DECIMAL(20,8) NOT NULL,
    
    locked_until TIMESTAMPTZ,
    reward_debt DECIMAL(20,8) DEFAULT 0,
    
    status VARCHAR(50) DEFAULT 'ACTIVE', -- 'ACTIVE', 'UNSTAKED'
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_staking_positions_updated_at ON staking_positions;
CREATE TRIGGER update_staking_positions_updated_at
    BEFORE UPDATE ON staking_positions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
