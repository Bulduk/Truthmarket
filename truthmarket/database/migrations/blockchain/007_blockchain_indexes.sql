-- 007_blockchain_indexes.sql

-- Wallets indexleri
CREATE INDEX IF NOT EXISTS idx_wallets_user_id ON wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_wallets_address ON wallets(address);

-- Transactions indexleri
CREATE INDEX IF NOT EXISTS idx_blockchain_tx_user_id ON blockchain_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_blockchain_tx_wallet_id ON blockchain_transactions(wallet_id);
CREATE INDEX IF NOT EXISTS idx_blockchain_tx_hash ON blockchain_transactions(tx_hash);
CREATE INDEX IF NOT EXISTS idx_blockchain_tx_type ON blockchain_transactions(transaction_type);
CREATE INDEX IF NOT EXISTS idx_blockchain_tx_status ON blockchain_transactions(status);
CREATE INDEX IF NOT EXISTS idx_blockchain_tx_created_at ON blockchain_transactions(created_at DESC);

-- Token balances indexleri
CREATE INDEX IF NOT EXISTS idx_token_balances_user_id ON token_balances(user_id);
CREATE INDEX IF NOT EXISTS idx_token_balances_wallet_id ON token_balances(wallet_id);
CREATE INDEX IF NOT EXISTS idx_token_balances_token_address ON token_balances(token_address);

-- NFTs indexleri
CREATE INDEX IF NOT EXISTS idx_nfts_user_id ON nfts(user_id);
CREATE INDEX IF NOT EXISTS idx_nfts_wallet_id ON nfts(wallet_id);
CREATE INDEX IF NOT EXISTS idx_nfts_contract_token ON nfts(contract_address, token_id);
CREATE INDEX IF NOT EXISTS idx_nfts_status ON nfts(status);

-- Staking indexleri
CREATE INDEX IF NOT EXISTS idx_staking_user_id ON staking_positions(user_id);
CREATE INDEX IF NOT EXISTS idx_staking_pool_id ON staking_positions(pool_id);
CREATE INDEX IF NOT EXISTS idx_staking_status ON staking_positions(status);

-- Rewards indexleri
CREATE INDEX IF NOT EXISTS idx_rewards_user_id ON rewards_history(user_id);
CREATE INDEX IF NOT EXISTS idx_rewards_type ON rewards_history(reward_type);
CREATE INDEX IF NOT EXISTS idx_rewards_claimed_at ON rewards_history(claimed_at DESC);
