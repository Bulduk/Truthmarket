import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('WalletService-Bootstrap');
  
  // Port 3006 as defined in system instructions
  const port = process.env.PORT || 3006;

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
        clientId: 'wallet-service',
        brokers: [process.env.KAFKA_BROKERS || 'kafka:9092'],
      },
      consumer: {
        groupId: 'wallet-consumer-group',
      },
    },
  });

  // Start microservices and HTTP server
  await app.startAllMicroservices();
  await app.listen(port);
  
  logger.log(`Wallet Service (REST) is running on: http://localhost:${port}`);
  logger.log(`Wallet Service (Kafka) is connected`);
}
bootstrap();
