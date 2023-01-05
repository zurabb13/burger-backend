import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  // imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  imports: [UsersModule, PassportModule],
  providers: [LoginService, LocalStrategy],
})
export class LoginModule {}
