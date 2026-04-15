-- 002_transactions_table.sql

CREATE TABLE IF NOT EXISTS blockchain_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id),
    wallet_id UUID REFERENCES wallets(id),
    
    tx_hash VARCHAR(100) UNIQUE NOT NULL,
    transaction_type transaction_type NOT NULL,
    
    amount DECIMAL(20,8) NOT NULL,
    token_address VARCHAR(42),
    
    from_address VARCHAR(42),
    to_address VARCHAR(42),
    
    status VARCHAR(50) DEFAULT 'PENDING', -- 'PENDING', 'CONFIRMED', 'FAILED'
    block_number BIGINT,
    gas_used DECIMAL(20,8),
    gas_price DECIMAL(20,8),
    
    metadata JSONB,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_blockchain_transactions_updated_at ON blockchain_transactions;
CREATE TRIGGER update_blockchain_transactions_updated_at
    BEFORE UPDATE ON blockchain_transactions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
