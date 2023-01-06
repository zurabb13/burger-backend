import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UsersMod } from '../../schemas/user';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from '../../strategy/constant';
import { HashService } from '../../services/hash/hash.service';
import { AuthService } from '../../services/auth/auth.service';
import { JwtStrategy } from '../../strategy/jwt.strategy';
import { LocalStrategy } from '../../strategy/local.strategy';

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
  controllers: [UserController],
  providers: [
    UserService,
    HashService,
    AuthService,
    JwtStrategy,
    LocalStrategy,
  ],
})
export class UserModule {}
