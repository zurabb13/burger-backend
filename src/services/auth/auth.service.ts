import { Injectable } from '@nestjs/common';
import { UserService } from '../../routes/user/user.service';
import { HashService } from '../hash/hash.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private hashService: HashService,
    private jwt: JwtService,
  ) {}
  async validation(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByUserName(email);
    if (user && (await this.hashService.comparePassword(pass, user.password))) {
      return user;
    }
    return null;
  }
  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
    };
    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
