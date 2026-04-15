import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TODO: Add PrismaModule, UserModule, KafkaModule, RedisModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
