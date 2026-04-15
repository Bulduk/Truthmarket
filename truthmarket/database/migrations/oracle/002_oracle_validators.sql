-- 002_oracle_validators.sql

CREATE TABLE IF NOT EXISTS oracle_validators (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    stake_amount DECIMAL(20,8) DEFAULT 0,
    reputation_score DECIMAL(10,2) DEFAULT 0,
    
    total_validations INTEGER DEFAULT 0,
    successful_validations INTEGER DEFAULT 0,
    failed_validations INTEGER DEFAULT 0,
    
    status VARCHAR(50) DEFAULT 'ACTIVE', -- 'ACTIVE', 'SUSPENDED', 'SLASHED'
    
    joined_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_oracle_validators_updated_at ON oracle_validators;
CREATE TRIGGER update_oracle_validators_updated_at
    BEFORE UPDATE ON oracle_validators
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
