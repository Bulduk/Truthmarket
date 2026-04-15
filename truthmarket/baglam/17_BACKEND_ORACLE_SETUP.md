## FAZ 3: Backend Kurulumu

### Adım 3.7 - Oracle Service Setup
- `oracle-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `src/main.ts` dosyası oluşturuldu. Port **3007** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. `oracle_requests`, `oracle_validators` ve `oracle_votes` tabloları tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi, 3007 portu expose edildi. **Önemli:** TruthX AI entegrasyonu için Python 3 ve gerekli build araçları Dockerfile'a eklendi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- Docker
- Python 3 (TruthX AI için)
