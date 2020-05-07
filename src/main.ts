import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('DataService');


  /*
  * @author : Praveen Kumar
  * @comment : host will be the name of container, so other container can communicate
  * NOTE : both containers should be on same bridge if host is same. 
  * @date: 2020-05-03 13:00:42
  */
  const dataServiceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: 'dataservice',
      port: 8100
    }
  }
  const app = await NestFactory.createMicroservice(AppModule, dataServiceOptions);
  app.listen(() => logger.log('DataService Microservice is listening'));
}
bootstrap();
