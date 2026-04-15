## FAZ 2: Veritabanı Kurulumu

### Adım 2.5 - Markets SQL Dosyaları
- `001_markets_table.sql`: Geleneksel tahmin piyasalarının (Prediction Markets) ana tablosu oluşturuldu.
- `002_markets_positions.sql`: Kullanıcıların geleneksel piyasalardaki pozisyonlarını (YES/NO hisseleri) tutan tablo oluşturuldu.
- `003_markets_orders.sql`: Piyasa emir defteri (Order Book) için emir kayıtlarını tutan tablo oluşturuldu.
- `004_markets_trades.sql`: Gerçekleşen alım-satım işlemlerini (Trades) tutan tablo oluşturuldu.
- `005_markets_liquidity.sql`: AMM (Otomatik Piyasa Yapıcı) için likidite sağlayıcılarının verilerini tutan tablo oluşturuldu.
- `006_markets_settlements.sql`: Sonuçlanan piyasaların çözümleme (Settlement) verilerini tutan tablo oluşturuldu.
- `007_markets_disputes.sql`: Piyasa sonuçlarına itiraz (Dispute) süreçlerini tutan tablo oluşturuldu.
- `008_markets_categories.sql`: Piyasalar için etiket/kategori eşleştirmelerini tutan tablo oluşturuldu.
- `009_markets_indexes.sql`: Geleneksel piyasalar için gerekli performans indexleri oluşturuldu.
- `010_signal_markets.sql`: **(Ek v2.0)** İçerik ekonomisine özel, 4 pozisyonlu (AMPLIFY, DAMPEN, SPIKE, FADE) Signal Market tablosu oluşturuldu. `content_registry` tablosu ile çift yönlü ilişki kuruldu.
- `011_signal_positions.sql`: **(Ek v2.0)** Kullanıcıların Signal Market'lerdeki pozisyonlarını tutan tablo oluşturuldu.
