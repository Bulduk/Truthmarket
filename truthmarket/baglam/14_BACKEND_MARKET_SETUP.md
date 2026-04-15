## FAZ 3: Backend Kurulumu

### Adım 3.4 - Market Service Setup
- `market-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `package.json` dosyasına Order Matching Engine için gerekli olan `heap-js` ve `decimal.js` kütüphaneleri eklendi.
- `src/main.ts` dosyası oluşturuldu. Port **3004** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. Geleneksel piyasalar (`markets`, `market_orders`, vb.) ve yeni nesil içerik piyasaları (`signal_markets`, `signal_positions`, `signal_map_positions`) tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi ve 3004 portu expose edildi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- Docker
- heap-js & decimal.js (Trading Engine için)
