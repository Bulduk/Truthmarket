-- 005_content_indexes.sql

-- Content Registry Indexes
CREATE INDEX IF NOT EXISTS idx_content_registry_user_id ON content_registry(user_id);
CREATE INDEX IF NOT EXISTS idx_content_registry_type ON content_registry(content_type);
CREATE INDEX IF NOT EXISTS idx_content_registry_signal_strength ON content_registry(signal_strength DESC);
CREATE INDEX IF NOT EXISTS idx_content_registry_created_at ON content_registry(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_content_registry_is_deleted ON content_registry(is_deleted);
CREATE INDEX IF NOT EXISTS idx_content_registry_signal_market_id ON content_registry(signal_market_id);

-- Trigram index for content search
CREATE INDEX IF NOT EXISTS idx_content_registry_title_trgm ON content_registry USING gin (title gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_content_registry_body_trgm ON content_registry USING gin (body gin_trgm_ops);

-- Specific Content Type Indexes
CREATE INDEX IF NOT EXISTS idx_video_content_content_id ON video_content(content_id);
CREATE INDEX IF NOT EXISTS idx_article_content_content_id ON article_content(content_id);
CREATE INDEX IF NOT EXISTS idx_audio_content_content_id ON audio_content(content_id);
CREATE INDEX IF NOT EXISTS idx_photo_content_content_id ON photo_content(content_id);
CREATE INDEX IF NOT EXISTS idx_analysis_content_content_id ON analysis_content(content_id);
CREATE INDEX IF NOT EXISTS idx_news_content_content_id ON news_content(content_id);
CREATE INDEX IF NOT EXISTS idx_product_content_content_id ON product_content(content_id);
CREATE INDEX IF NOT EXISTS idx_person_content_content_id ON person_content(content_id);
