-- 011_signal_positions.sql
-- Sistem Talimatı Ek v2.0'dan alınmıştır.

CREATE TABLE IF NOT EXISTS signal_positions (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    signal_market_id UUID NOT NULL REFERENCES signal_markets(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    position_type   VARCHAR(50) NOT NULL,
    amount          DECIMAL(20,8) NOT NULL,
    odds_at_entry   DECIMAL(10,4) NOT NULL,
    potential_return DECIMAL(20,8),
    status          VARCHAR(50) DEFAULT 'open',
    opened_at       TIMESTAMPTZ DEFAULT NOW(),
    closed_at       TIMESTAMPTZ,
    settled_at      TIMESTAMPTZ,
    profit_loss     DECIMAL(20,8),
    tx_hash         VARCHAR(100)
);

CREATE INDEX IF NOT EXISTS idx_signal_positions_market_id ON signal_positions(signal_market_id);
CREATE INDEX IF NOT EXISTS idx_signal_positions_user_id ON signal_positions(user_id);
CREATE INDEX IF NOT EXISTS idx_signal_positions_status ON signal_positions(status);
