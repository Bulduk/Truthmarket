## FAZ 3: Backend Kurulumu

### Adım 3.9 - Analytics Service Setup
- `analytics-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `package.json` dosyasına zaman serisi ve arama veritabanları için `@elastic/elasticsearch` ve `@influxdata/influxdb-client` kütüphaneleri eklendi.
- `src/main.ts` dosyası oluşturuldu. Port **3009** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. `user_analytics`, `market_analytics` ve `platform_metrics` tabloları tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi ve 3009 portu expose edildi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- Docker
- Elasticsearch Client
- InfluxDB Client
