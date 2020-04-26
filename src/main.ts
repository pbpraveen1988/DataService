import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('DataService');
  const dataServiceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8100
    }
  }
  const app = await NestFactory.createMicroservice(AppModule, dataServiceOptions);
  app.listen(() => logger.log('DataService Microservice is listening'));
}
bootstrap();
