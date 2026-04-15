-- 003_tokens_table.sql

CREATE TABLE IF NOT EXISTS token_balances (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    wallet_id UUID REFERENCES wallets(id) ON DELETE CASCADE,
    
    token_address VARCHAR(42) NOT NULL,
    symbol VARCHAR(20),
    
    balance DECIMAL(20,8) DEFAULT 0,
    locked_balance DECIMAL(20,8) DEFAULT 0,
    
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(wallet_id, token_address)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_token_balances_updated_at ON token_balances;
CREATE TRIGGER update_token_balances_updated_at
    BEFORE UPDATE ON token_balances
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
