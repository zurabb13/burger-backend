import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UsersMod } from '../../schemas/user';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from '../../strategy/constant';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../user/user.service';
import { LocalStrategy } from '../../strategy/local.strategy';
import { HashService } from '../../services/hash/hash.service';

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
