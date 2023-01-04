import { Injectable } from '@nestjs/common';
import { sample_users } from '../data';
export type User = any;
@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor() {
    this.users = [
      {
        name: 'Zura',
        email: 'z@gmail.com',
        password: '12345',
        address: 'Toronto On',
        isAdmin: true,
      },
    ];
  }
  findOne(userEmail: string) {
    return this.users.find((user) => user.email === userEmail);
  }
}
