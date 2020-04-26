import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { DataController } from '../controllers';
import { DataService } from '../services';
import { LoggerMiddleware } from '../middleware';
import { DatabaseModule } from './database.module';
import { AllExceptionsFilter } from '../filters';

@Module({
  imports: [DatabaseModule],
  controllers: [DataController],
  providers: [ DataService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }
  ],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)

  }
}
