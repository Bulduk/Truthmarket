-- 004_users_settings.sql

CREATE TABLE IF NOT EXISTS user_settings (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    
    email_notifications BOOLEAN DEFAULT TRUE,
    push_notifications BOOLEAN DEFAULT TRUE,
    sms_notifications BOOLEAN DEFAULT FALSE,
    market_alerts BOOLEAN DEFAULT TRUE,
    follow_notifications BOOLEAN DEFAULT TRUE,
    mention_notifications BOOLEAN DEFAULT TRUE,
    reward_notifications BOOLEAN DEFAULT TRUE,
    signal_notifications BOOLEAN DEFAULT TRUE,
    
    privacy_profile BOOLEAN DEFAULT FALSE,
    privacy_positions BOOLEAN DEFAULT FALSE,
    privacy_earnings BOOLEAN DEFAULT FALSE,
    show_in_leaderboard BOOLEAN DEFAULT TRUE,
    allow_messages BOOLEAN DEFAULT TRUE,
    
    theme VARCHAR(20) DEFAULT 'dark',
    default_stake_amount DECIMAL(20,8) DEFAULT 10.00000000,
    auto_claim_rewards BOOLEAN DEFAULT FALSE,
    
    preferred_content_types TEXT[] DEFAULT '{}',
    
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_user_settings_updated_at ON user_settings;
CREATE TRIGGER update_user_settings_updated_at
    BEFORE UPDATE ON user_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
