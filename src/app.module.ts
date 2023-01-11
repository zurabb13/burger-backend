import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FoodModule } from './routes/food/food.module';
import { TagModule } from './routes/tag/tag.module';
import { SearchModule } from './routes/search/search.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './routes/user/user.module';
import { AuthModule } from './routes/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(
      'mongodb+srv://burger:123@cluster0.rxgethx.mongodb.net/shop?retryWrites=true&w=majority',
    ),
    FoodModule,
    TagModule,
    SearchModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
