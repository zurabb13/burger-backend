import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UsersMod } from '../../schemas/user';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from '../../passport/strategy/constant';
import { AuthService } from '../../common/services/auth/auth.service';
import { UserService } from '../user/user.service';
import { LocalStrategy } from '../../passport/strategy/local.strategy';
import { HashService } from '../../common/services/hash/hash.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UsersMod.name, schema: UserSchema }]),
    JwtModule.register({
      secret: JwtConstants.secret,
      signOptions: {
        expiresIn: '30d',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, HashService],
})
export class AuthModule {}
