-- 009_users_indexes.sql

-- Users tablosu indexleri
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_wallet_address ON users(wallet_address);
CREATE INDEX IF NOT EXISTS idx_users_reputation_score ON users(reputation_score DESC);
CREATE INDEX IF NOT EXISTS idx_users_user_type ON users(user_type);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_users_is_active ON users(is_active);
CREATE INDEX IF NOT EXISTS idx_users_referral_code ON users(referral_code);

-- Metin arama için trigram indexi (username ve display_name)
CREATE INDEX IF NOT EXISTS idx_users_username_trgm ON users USING gin (username gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_users_display_name_trgm ON users USING gin (display_name gin_trgm_ops);

-- Sessions tablosu indexleri
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_refresh_token ON user_sessions(refresh_token);
CREATE INDEX IF NOT EXISTS idx_user_sessions_expires_at ON user_sessions(expires_at);

-- OAuth tablosu indexleri
CREATE INDEX IF NOT EXISTS idx_user_oauth_user_id ON user_oauth(user_id);

-- KYC tablosu indexleri
CREATE INDEX IF NOT EXISTS idx_user_kyc_user_id ON user_kyc(user_id);
CREATE INDEX IF NOT EXISTS idx_user_kyc_status ON user_kyc(status);

-- Reputation history indexleri
CREATE INDEX IF NOT EXISTS idx_user_reputation_user_id ON user_reputation_history(user_id);
CREATE INDEX IF NOT EXISTS idx_user_reputation_created_at ON user_reputation_history(created_at DESC);

-- Follows tablosu indexleri
CREATE INDEX IF NOT EXISTS idx_user_follows_follower_id ON user_follows(follower_id);
CREATE INDEX IF NOT EXISTS idx_user_follows_following_id ON user_follows(following_id);

-- Blocks tablosu indexleri
CREATE INDEX IF NOT EXISTS idx_user_blocks_blocker_id ON user_blocks(blocker_id);
CREATE INDEX IF NOT EXISTS idx_user_blocks_blocked_id ON user_blocks(blocked_id);
