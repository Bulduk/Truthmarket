-- 004_oracle_indexes.sql

-- Oracle Requests indexleri
CREATE INDEX IF NOT EXISTS idx_oracle_requests_market_id ON oracle_requests(market_id);
CREATE INDEX IF NOT EXISTS idx_oracle_requests_content_id ON oracle_requests(content_id);
CREATE INDEX IF NOT EXISTS idx_oracle_requests_type ON oracle_requests(oracle_type);
CREATE INDEX IF NOT EXISTS idx_oracle_requests_status ON oracle_requests(status);
CREATE INDEX IF NOT EXISTS idx_oracle_requests_requested_at ON oracle_requests(requested_at DESC);

-- Oracle Validators indexleri
CREATE INDEX IF NOT EXISTS idx_oracle_validators_user_id ON oracle_validators(user_id);
CREATE INDEX IF NOT EXISTS idx_oracle_validators_status ON oracle_validators(status);
CREATE INDEX IF NOT EXISTS idx_oracle_validators_reputation ON oracle_validators(reputation_score DESC);

-- Oracle Votes indexleri
CREATE INDEX IF NOT EXISTS idx_oracle_votes_request_id ON oracle_votes(request_id);
CREATE INDEX IF NOT EXISTS idx_oracle_votes_validator_id ON oracle_votes(validator_id);
CREATE INDEX IF NOT EXISTS idx_oracle_votes_created_at ON oracle_votes(created_at DESC);
