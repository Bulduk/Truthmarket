-- 001_oracle_requests.sql

CREATE TABLE IF NOT EXISTS oracle_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    market_id UUID REFERENCES markets(id) ON DELETE CASCADE,
    content_id UUID REFERENCES content_registry(id) ON DELETE CASCADE,
    
    oracle_type oracle_type NOT NULL, -- 'CHAINLINK', 'COMMUNITY', 'TRUTHX_AI'
    request_type VARCHAR(50) NOT NULL, -- 'MARKET_RESOLUTION', 'CONTENT_VERIFICATION', 'PRICE_FEED'
    
    status VARCHAR(50) DEFAULT 'PENDING', -- 'PENDING', 'PROCESSING', 'RESOLVED', 'FAILED', 'DISPUTED'
    
    request_data JSONB,
    result_data JSONB,
    
    requested_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT oracle_requests_target_check CHECK (market_id IS NOT NULL OR content_id IS NOT NULL)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_oracle_requests_updated_at ON oracle_requests;
CREATE TRIGGER update_oracle_requests_updated_at
    BEFORE UPDATE ON oracle_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
