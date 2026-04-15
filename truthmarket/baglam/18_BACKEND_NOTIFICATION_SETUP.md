## FAZ 3: Backend Kurulumu

### Adım 3.8 - Notification Service Setup
- `notification-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `package.json` dosyasına bildirim entegrasyonları için `@sendgrid/mail`, `twilio` ve `firebase-admin` kütüphaneleri eklendi.
- `src/main.ts` dosyası oluşturuldu. Port **3008** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. `notifications`, `push_tokens` ve `email_logs` tabloları tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi ve 3008 portu expose edildi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- Docker
- SendGrid (Email)
- Firebase Admin (Push)
- Twilio (SMS)
