## FAZ 3: Backend Kurulumu

### Adım 3.6 - Wallet Service Setup
- `wallet-service` klasörü oluşturuldu.
- `package.json`, `tsconfig.json` ve `nest-cli.json` dosyaları ile NestJS 10 altyapısı kuruldu.
- `package.json` dosyasına Blockchain etkileşimleri için `ethers` kütüphanesi eklendi.
- `src/main.ts` dosyası oluşturuldu. Port **3006** olarak ayarlandı ve Kafka Microservice bağlantısı eklendi.
- `src/app.module.ts` dosyası oluşturuldu.
- `prisma/schema.prisma` dosyası oluşturuldu. `wallets`, `blockchain_transactions`, `token_balances`, `nfts`, `staking_positions` ve `rewards_history` tabloları tanımlandı.
- `Dockerfile` oluşturuldu. Multi-stage build ile optimize edildi ve 3006 portu expose edildi.

**Kullanılan Teknolojiler:**
- NestJS 10
- Prisma ORM
- KafkaJS
- Docker
- Ethers.js
