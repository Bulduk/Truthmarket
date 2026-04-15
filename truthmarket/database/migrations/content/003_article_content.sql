-- 003_article_content.sql

CREATE TABLE IF NOT EXISTS article_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    
    body_markdown TEXT,
    body_html TEXT,
    
    reading_time_minutes INTEGER,
    word_count INTEGER,
    source_urls TEXT[],
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
