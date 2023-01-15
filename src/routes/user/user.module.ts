import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UsersMod } from '../../schemas/user';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from '../../common/services/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UsersMod.name, schema: UserSchema }]),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: process.env.TIME,
      },
    }),
  ],
  controllers: [UserController],
  providers: [AuthService, JwtService],
  exports: [JwtService],
})
export class UserModule {}
