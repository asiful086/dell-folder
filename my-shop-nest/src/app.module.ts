import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { LoggerMiddleware } from './logger.middleware';
import { CategoryModule } from './category/category.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [CategoryModule, CategoriesModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: 'cats', method: RequestMethod.GET },
        { path: '/cats/cat/:id', method: RequestMethod.GET },
      );
  }
}
// export class AppModule {}
