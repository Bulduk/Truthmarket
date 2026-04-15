import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TODO: Add PrismaModule, AnalyticsModule, ElasticsearchModule, InfluxDBModule, KafkaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
