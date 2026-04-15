-- 001_markets_table.sql

CREATE TABLE IF NOT EXISTS markets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    creator_id UUID NOT NULL REFERENCES users(id),
    title VARCHAR(500) NOT NULL,
    description TEXT,
    category market_category NOT NULL,
    status market_status DEFAULT 'ACTIVE',
    
    yes_price DECIMAL(10,4) DEFAULT 0.5000,
    no_price DECIMAL(10,4) DEFAULT 0.5000,
    
    total_volume DECIMAL(20,8) DEFAULT 0,
    liquidity DECIMAL(20,8) DEFAULT 0,
    participant_count INTEGER DEFAULT 0,
    
    oracle_type oracle_type DEFAULT 'COMMUNITY',
    oracle_address VARCHAR(42),
    
    resolution_source TEXT,
    resolved_at TIMESTAMPTZ,
    winning_outcome VARCHAR(50),
    
    start_time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    end_time TIMESTAMPTZ NOT NULL,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_markets_updated_at ON markets;
CREATE TRIGGER update_markets_updated_at
    BEFORE UPDATE ON markets
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
