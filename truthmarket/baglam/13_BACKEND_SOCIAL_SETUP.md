## FAZ 3: Backend Kurulumu

### Adım 3.3 - Social Service Setup
- `social-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `src/main.ts` dosyası oluşturuldu. Port **3003** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. `posts`, `post_interactions`, `comments`, `hashtags`, `post_hashtags`, `messages`, `media` ve `reports` tabloları tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi ve 3003 portu expose edildi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- Docker
