-- 006_markets_settlements.sql

CREATE TABLE IF NOT EXISTS market_settlements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    resolved_by UUID REFERENCES users(id),
    
    winning_outcome VARCHAR(50) NOT NULL,
    proof_url TEXT,
    settlement_data JSONB,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
