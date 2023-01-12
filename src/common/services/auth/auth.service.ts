import { Injectable } from '@nestjs/common';
import { UserService } from '../../../routes/user/user.service';
import { HashService } from '../hash/hash.service';
import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from '../../entity/UsersEntity';
import { User } from '../../interfaces/user-models';
import jwt from 'jsonwebtoken';

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

  async login(user: User) {
    const payload = {
      email: user.email,
      password: user.password,
      id: user.id,
    };
    return {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      name: user.name,
      payload,
    };
  }

  async generateTokenReponse(user: User) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      },
    );
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token,
    };
  }
}
