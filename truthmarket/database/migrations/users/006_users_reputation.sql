-- 006_users_reputation.sql

CREATE TABLE IF NOT EXISTS user_reputation_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    event_type VARCHAR(100) NOT NULL, -- e.g., 'MARKET_WON', 'CONTENT_AMPLIFIED', 'REPORTED'
    score_change DECIMAL(10,2) NOT NULL,
    score_before DECIMAL(10,2) NOT NULL,
    score_after DECIMAL(10,2) NOT NULL,
    reason TEXT,
    reference_id UUID, -- ID of the market, post, etc.
    reference_type VARCHAR(50), -- 'MARKET', 'POST', 'COMMENT'
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
