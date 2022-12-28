import { Injectable } from '@nestjs/common';
import { simple_food } from './data';

@Injectable()
export class AppService {
  getHello() {
    return simple_food;
  }
}
