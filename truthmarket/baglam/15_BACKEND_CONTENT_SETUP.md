## FAZ 3: Backend Kurulumu

### Adım 3.5 - Content Service Setup
- `content-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `src/main.ts` dosyası oluşturuldu. Port **3005** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. `content_registry` ve içerik türlerine özel tablolar (`video_content`, `article_content`, vb.) tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi ve 3005 portu expose edildi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- Docker
