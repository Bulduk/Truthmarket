-- 002_video_content.sql

CREATE TABLE IF NOT EXISTS video_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    
    video_url TEXT NOT NULL,
    thumbnail_url TEXT,
    
    duration_seconds INTEGER,
    resolution VARCHAR(20),
    file_size BIGINT,
    codec VARCHAR(50),
    bitrate INTEGER,
    
    view_count INTEGER DEFAULT 0,
    watch_time_total BIGINT DEFAULT 0,
    completion_rate DECIMAL(5,2) DEFAULT 0.00,
    rewatch_rate DECIMAL(5,2) DEFAULT 0.00,
    
    viral_coefficient DECIMAL(5,2) DEFAULT 0.00,
    platform_syncs JSONB,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
