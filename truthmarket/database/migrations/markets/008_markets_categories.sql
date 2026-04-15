-- 008_markets_categories.sql

CREATE TABLE IF NOT EXISTS market_tags (
    market_id UUID NOT NULL REFERENCES markets(id) ON DELETE CASCADE,
    tag VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (market_id, tag)
);
