-- 003_oracle_votes.sql

CREATE TABLE IF NOT EXISTS oracle_votes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    request_id UUID NOT NULL REFERENCES oracle_requests(id) ON DELETE CASCADE,
    validator_id UUID NOT NULL REFERENCES oracle_validators(id) ON DELETE CASCADE,
    
    proposed_outcome VARCHAR(255) NOT NULL,
    stake_weight DECIMAL(20,8) NOT NULL,
    
    is_consensus BOOLEAN, -- True if this vote matched the final consensus
    reward_amount DECIMAL(20,8) DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(request_id, validator_id)
);
