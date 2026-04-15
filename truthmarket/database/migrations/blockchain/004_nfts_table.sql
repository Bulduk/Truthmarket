-- 004_nfts_table.sql

CREATE TABLE IF NOT EXISTS nfts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    wallet_id UUID REFERENCES wallets(id),
    
    contract_address VARCHAR(42) NOT NULL,
    token_id VARCHAR(100) NOT NULL,
    
    metadata_uri TEXT,
    metadata JSONB,
    
    status nft_status DEFAULT 'MINTED',
    
    mint_tx_hash VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(contract_address, token_id)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_nfts_updated_at ON nfts;
CREATE TRIGGER update_nfts_updated_at
    BEFORE UPDATE ON nfts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
