-- 006_media_table.sql

CREATE TABLE IF NOT EXISTS media (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    post_id UUID REFERENCES posts(id) ON DELETE SET NULL,
    message_id UUID REFERENCES messages(id) ON DELETE SET NULL,
    
    url TEXT NOT NULL,
    media_type VARCHAR(50) NOT NULL, -- 'IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT'
    mime_type VARCHAR(100),
    size_bytes BIGINT,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
