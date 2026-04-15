import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TODO: Add PrismaModule, MarketModule, TradingEngineModule, KafkaModule, RedisModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
