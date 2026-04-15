## FAZ 3: Backend Kurulumu

### Adım 3.2 - User Service Setup
- `user-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `src/main.ts` dosyası oluşturuldu. Port **3002** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. `users`, `user_settings`, `user_kyc`, `user_reputation_history`, `user_follows` ve `user_blocks` tabloları tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi ve 3002 portu expose edildi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- Docker
