## FAZ 2: Veritabanı Kurulumu

### Adım 2.6 - Blockchain SQL Dosyaları
- `001_wallets_table.sql`: Kullanıcıların Web3 cüzdan adreslerini ve ağ bilgilerini tutan tablo oluşturuldu.
- `002_transactions_table.sql`: On-chain gerçekleşen tüm işlemleri (deposit, withdraw, trade, mint vb.) tutan tablo oluşturuldu.
- `003_tokens_table.sql`: Kullanıcıların cüzdanlarındaki token bakiyelerini (serbest ve kilitli) tutan tablo oluşturuldu.
- `004_nfts_table.sql`: Kullanıcıların sahip olduğu veya mint ettiği NFT'lerin (TruthNFT) verilerini tutan tablo oluşturuldu.
- `005_staking_table.sql`: Kullanıcıların staking pozisyonlarını, kilit sürelerini ve ödül hak edişlerini tutan tablo oluşturuldu.
- `006_rewards_table.sql`: Kullanıcıların kazandığı ve claim ettiği ödüllerin (staking, referral, liquidity vb.) geçmişini tutan tablo oluşturuldu.
- `007_blockchain_indexes.sql`: Blockchain tabloları için gerekli performans indexleri oluşturuldu.
