import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';
import { FoodModule } from './routes/food/food.module';
import { TagModule } from './routes/tag/tag.module';
import { SearchModule } from './routes/search/search.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.MONGO, {
      connectionFactory: (con) => {
        console.log('connection');
        return con;
      },
    }),
    FoodModule,
    TagModule,
    SearchModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
