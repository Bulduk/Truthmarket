-- 001_content_registry.sql

CREATE TABLE IF NOT EXISTS content_registry (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content_type content_type NOT NULL,
    
    title VARCHAR(500),
    body TEXT,
    media_url TEXT,
    thumbnail_url TEXT,
    external_url TEXT,
    
    metadata JSONB,
    ipfs_hash VARCHAR(100),
    nft_token_id VARCHAR(100),
    
    signal_market_id UUID, -- Foreign key will be added when signal_markets table is created
    
    view_count INTEGER DEFAULT 0,
    signal_count INTEGER DEFAULT 0,
    bookmark_count INTEGER DEFAULT 0,
    comment_count INTEGER DEFAULT 0,
    share_count INTEGER DEFAULT 0,
    
    signal_strength DECIMAL(5,2) DEFAULT 0,
    
    is_nft BOOLEAN DEFAULT FALSE,
    is_deleted BOOLEAN DEFAULT FALSE,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_content_registry_updated_at ON content_registry;
CREATE TRIGGER update_content_registry_updated_at
    BEFORE UPDATE ON content_registry
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
