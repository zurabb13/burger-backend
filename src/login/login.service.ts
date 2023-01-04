import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../models/user-models';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class LoginService {
  constructor(private usersService: UsersService) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
const gToken = (user: User) => {
  const token = jwt.sign(
    {
      id: user.userId,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.SECRET!,
    {
      expiresIn: process.env.TIME,
    },
  );
  return {
    id: user.userId,
    email: user.email,
    name: user.name,
    isAdmin: user.isAdmin,
    password: user.password,
    token: token,
  };
};
