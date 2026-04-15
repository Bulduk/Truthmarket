-- 007_markets_disputes.sql

CREATE TABLE IF NOT EXISTS market_disputes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    disputer_id UUID NOT NULL REFERENCES users(id),
    
    reason TEXT NOT NULL,
    evidence_url TEXT,
    
    status dispute_status DEFAULT 'OPEN',
    resolution_outcome VARCHAR(50),
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_market_disputes_updated_at ON market_disputes;
CREATE TRIGGER update_market_disputes_updated_at
    BEFORE UPDATE ON market_disputes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
