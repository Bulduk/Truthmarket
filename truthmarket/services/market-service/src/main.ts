import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('MarketService-Bootstrap');
  
  // Port 3004 as defined in system instructions
  const port = process.env.PORT || 3004;

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
        clientId: 'market-service',
        brokers: [process.env.KAFKA_BROKERS || 'kafka:9092'],
      },
      consumer: {
        groupId: 'market-consumer-group',
      },
    },
  });

  // Start microservices and HTTP server
  await app.startAllMicroservices();
  await app.listen(port);
  
  logger.log(`Market Service (REST) is running on: http://localhost:${port}`);
  logger.log(`Market Service (Kafka) is connected`);
}
bootstrap();
