# TruthMarket Proje Bağlamı (Context)

Bu klasör, TruthMarket projesinin geliştirilme sürecindeki mimari kararları, tamamlanan adımları ve sistemin genel bağlamını tutmak için oluşturulmuştur.

## Tamamlanan Adımlar

### FAZ 1: Altyapı Kurulumu
- **Adım 1.1 - Monorepo Kurulumu:** `pnpm workspaces` ve `turborepo` kullanılarak monorepo iskeleti kuruldu. Docker Compose ile tüm veritabanları (PostgreSQL, Redis, MongoDB, Elasticsearch, InfluxDB, Kafka, IPFS) ve mikroservisler için container altyapısı hazırlandı.
- **Adım 1.2 - Shared Packages:** Tüm projede ortak kullanılacak olan `@truthmarket/shared-types`, `@truthmarket/shared-utils` ve `@truthmarket/shared-config` paketleri oluşturuldu. Bu paketler sayesinde frontend ve backend servisleri aynı tip tanımlarını ve yardımcı fonksiyonları kullanacak.
