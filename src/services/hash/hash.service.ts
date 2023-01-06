import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async hashPassword(pass: string) {
    const round = 10;
    return await bcrypt.hash(pass, round);
  }
  async comparePassword(password: string, hash) {
    return await bcrypt.compare(password, hash);
  }
}
