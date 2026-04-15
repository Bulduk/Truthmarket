-- 006_rewards_table.sql

CREATE TABLE IF NOT EXISTS rewards_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    
    reward_type VARCHAR(50) NOT NULL, -- 'STAKING', 'MARKET_CREATION', 'LIQUIDITY', 'REFERRAL'
    amount DECIMAL(20,8) NOT NULL,
    
    reference_id UUID, -- ID of the related entity (e.g., market_id, staking_position_id)
    tx_hash VARCHAR(100),
    
    claimed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
