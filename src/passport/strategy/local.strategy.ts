import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../../common/services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validation(email, password);
    if (!user) {
      throw new UnauthorizedException({
        message: 'You have entered a wrong username or password',
      });
    }
    return user;
  }
}
