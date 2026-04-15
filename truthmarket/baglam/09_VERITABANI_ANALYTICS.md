## FAZ 2: Veritabanı Kurulumu

### Adım 2.8 - Analytics SQL Dosyaları
- `001_user_analytics.sql`: Kullanıcıların günlük aktivitelerini (oturum süresi, etkileşimler, işlem hacmi) tutan tablo oluşturuldu.
- `002_market_analytics.sql`: Piyasaların günlük metriklerini (hacim, likidite, OHLC fiyat verileri) tutan tablo oluşturuldu.
- `003_platform_metrics.sql`: Platformun genel günlük metriklerini (DAU, toplam hacim, TVL, yeni içerikler) tutan tablo oluşturuldu.
- `004_analytics_indexes.sql`: Analitik tabloları için gerekli zaman serisi ve performans indexleri oluşturuldu.
- *Not:* İleride TimescaleDB aktif edildiğinde bu tabloların hypertable'a dönüştürülebilmesi için gerekli SQL yorum satırları eklendi.
