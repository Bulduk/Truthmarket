## FAZ 3: Backend Kurulumu

### Adım 3.1 - Auth Service Setup
- `auth-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `src/main.ts` dosyası oluşturuldu. Port **3001** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. Veritabanı şeması zaten raw SQL ile oluşturulduğu için, Prisma burada sadece ORM olarak kullanılacak şekilde `users`, `user_sessions` ve `user_oauth` tabloları tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi ve 3001 portu expose edildi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- JWT & Passport
- Docker
