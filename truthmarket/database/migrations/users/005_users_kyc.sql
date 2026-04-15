-- 005_users_kyc.sql

CREATE TABLE IF NOT EXISTS user_kyc (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    kyc_provider VARCHAR(100),
    kyc_reference_id VARCHAR(255),
    
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    date_of_birth DATE,
    nationality VARCHAR(2), -- ISO 3166-1 alpha-2
    
    id_type VARCHAR(50), -- PASSPORT, NATIONAL_ID, DRIVERS_LICENSE
    id_number VARCHAR(100),
    id_front_url TEXT,
    id_back_url TEXT,
    selfie_url TEXT,
    
    address_line1 VARCHAR(255),
    address_city VARCHAR(100),
    address_country VARCHAR(2),
    
    status kyc_status DEFAULT 'PENDING',
    rejection_reason TEXT,
    
    verified_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for updated_at
DROP TRIGGER IF EXISTS update_user_kyc_updated_at ON user_kyc;
CREATE TRIGGER update_user_kyc_updated_at
    BEFORE UPDATE ON user_kyc
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();
