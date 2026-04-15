-- 003_users_oauth.sql

CREATE TABLE IF NOT EXISTS user_oauth (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    provider VARCHAR(50) NOT NULL, -- e.g., 'google', 'twitter', 'github'
    provider_id VARCHAR(255) NOT NULL,
    provider_token TEXT,
    provider_data JSONB,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(provider, provider_id)
);
