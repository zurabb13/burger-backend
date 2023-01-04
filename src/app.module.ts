import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { LoginService } from './login/login.service';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    LoginModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService, LoginService],
})
export class AppModule {}
