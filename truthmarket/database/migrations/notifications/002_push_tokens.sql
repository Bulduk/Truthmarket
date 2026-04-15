-- 002_push_tokens.sql

CREATE TABLE IF NOT EXISTS push_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    device_id VARCHAR(255) NOT NULL,
    token VARCHAR(512) NOT NULL,
    platform VARCHAR(50) NOT NULL, -- 'ios', 'android', 'web'
    
    is_active BOOLEAN DEFAULT TRUE,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE(user_id, device_id)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_push_tokens_updated_at ON push_tokens;
CREATE TRIGGER update_push_tokens_updated_at
    BEFORE UPDATE ON push_tokens
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
