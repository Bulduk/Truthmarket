-- 001_notifications_table.sql

CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    
    notification_type notification_type NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    
    reference_id UUID, -- ID of the related entity (market, post, user, etc.)
    reference_type VARCHAR(50), -- 'MARKET', 'POST', 'USER', 'TRANSACTION'
    
    action_url TEXT,
    icon_url TEXT,
    
    is_read BOOLEAN DEFAULT FALSE,
    read_at TIMESTAMPTZ,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
