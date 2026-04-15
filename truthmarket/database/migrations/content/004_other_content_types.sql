-- 004_other_content_types.sql

-- Audio Content
CREATE TABLE IF NOT EXISTS audio_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    audio_url TEXT NOT NULL,
    duration_seconds INTEGER,
    resonance_score DECIMAL(5,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Photo Content
CREATE TABLE IF NOT EXISTS photo_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    visual_impact_score DECIMAL(5,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Analysis Content
CREATE TABLE IF NOT EXISTS analysis_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    accuracy_rate DECIMAL(5,2) DEFAULT 0.00,
    market_performance DECIMAL(5,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- News Content
CREATE TABLE IF NOT EXISTS news_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    source_verification BOOLEAN DEFAULT FALSE,
    reliability_chain TEXT[],
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Product Content
CREATE TABLE IF NOT EXISTS product_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    product_market_fit_score DECIMAL(5,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Person Content
CREATE TABLE IF NOT EXISTS person_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content_id UUID NOT NULL REFERENCES content_registry(id) ON DELETE CASCADE,
    influence_trajectory DECIMAL(5,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
