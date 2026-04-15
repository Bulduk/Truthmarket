import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('AnalyticsService-Bootstrap');
  
  // Port 3009 as defined in system instructions
  const port = process.env.PORT || 3009;

  // Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));

  // Kafka Microservice Setup
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'analytics-service',
        brokers: [process.env.KAFKA_BROKERS || 'kafka:9092'],
      },
      consumer: {
        groupId: 'analytics-consumer-group',
      },
    },
  });

  // Start microservices and HTTP server
  await app.startAllMicroservices();
  await app.listen(port);
  
  logger.log(`Analytics Service (REST) is running on: http://localhost:${port}`);
  logger.log(`Analytics Service (Kafka) is connected`);
}
bootstrap();
