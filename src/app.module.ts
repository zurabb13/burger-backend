import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FoodModule } from './routes/food/food.module';
import { TagModule } from './routes/tag/tag.module';
import { SearchModule } from './routes/search/search.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './routes/user/user.module';
import { AuthModule } from './routes/auth/auth.module';
import { OrderModule } from './routes/order/order.module';
import { OrderController } from './routes/order/order.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.MONGO),
    FoodModule,
    TagModule,
    SearchModule,
    UserModule,
    AuthModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware).forRoutes(OrderController);
  // }
}
