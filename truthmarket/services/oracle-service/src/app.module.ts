import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TODO: Add PrismaModule, OracleModule, TruthXModule, KafkaModule, RedisModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
