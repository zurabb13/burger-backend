import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UsersMod } from '../../schemas/user';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtConstants } from '../../passport/strategy/constant';
import { AuthService } from '../../common/services/auth/auth.service';
import { LocalStrategy } from '../../passport/strategy/local.strategy';
import { HashService } from '../../common/services/hash/hash.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UsersMod.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  exports: [JwtService],
})
export class AuthModule {}
