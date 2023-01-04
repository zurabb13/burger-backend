import { Injectable } from '@nestjs/common';
import { simple_food } from './data';
import { LoginService } from './login/login.service';

@Injectable()
export class AppService {
  constructor(private loginService: LoginService) {}
  getHello() {
    return simple_food;
  }
}
