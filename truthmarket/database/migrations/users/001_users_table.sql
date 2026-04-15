-- 001_users_table.sql

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE,
    wallet_address VARCHAR(42) UNIQUE,
    password_hash VARCHAR(255),
    display_name VARCHAR(100),
    bio TEXT,
    avatar_ipfs_hash VARCHAR(255),
    avatar_url TEXT,
    cover_ipfs_hash VARCHAR(255),
    cover_url TEXT,
    
    user_type user_type DEFAULT 'USER',
    kyc_status kyc_status DEFAULT 'NONE',
    
    is_verified BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    is_banned BOOLEAN DEFAULT FALSE,
    ban_reason TEXT,
    ban_expires_at TIMESTAMPTZ,
    
    two_fa_enabled BOOLEAN DEFAULT FALSE,
    two_fa_secret VARCHAR(255),
    
    language VARCHAR(10) DEFAULT 'en',
    timezone VARCHAR(50) DEFAULT 'UTC',
    
    reputation_score DECIMAL(10,2) DEFAULT 0.00,
    accuracy_rate DECIMAL(5,2) DEFAULT 0.00,
    total_predictions INTEGER DEFAULT 0,
    correct_predictions INTEGER DEFAULT 0,
    total_earned DECIMAL(20,8) DEFAULT 0.00000000,
    total_staked DECIMAL(20,8) DEFAULT 0.00000000,
    
    follower_count INTEGER DEFAULT 0,
    following_count INTEGER DEFAULT 0,
    post_count INTEGER DEFAULT 0,
    market_count INTEGER DEFAULT 0,
    signal_count INTEGER DEFAULT 0,
    signal_accuracy DECIMAL(5,2) DEFAULT 0.00,
    
    referral_code VARCHAR(20) UNIQUE,
    referred_by UUID REFERENCES users(id),
    
    last_login_at TIMESTAMPTZ,
    last_login_ip VARCHAR(45),
    email_verified_at TIMESTAMPTZ,
    wallet_verified_at TIMESTAMPTZ,
    
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMPTZ,

    CONSTRAINT users_email_or_wallet_check CHECK (email IS NOT NULL OR wallet_address IS NOT NULL)
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
