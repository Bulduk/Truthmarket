-- 003_email_logs.sql

CREATE TABLE IF NOT EXISTS email_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    
    recipient_email VARCHAR(255) NOT NULL,
    template_name VARCHAR(100) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    
    status VARCHAR(50) DEFAULT 'PENDING', -- 'PENDING', 'SENT', 'FAILED', 'BOUNCED', 'COMPLAINED'
    provider_message_id VARCHAR(255),
    error_message TEXT,
    
    sent_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
