import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from '../../common/services/auth/auth.service';

@Controller('register')
export class UserController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  registerUser(
    @Body()
    body: {
      name: string;
      email: string;
      password: string;
      address: string;
    },
  ) {
    return this.authService.register(
      body.name,
      body.email,
      body.password,
      body.address,
    );
  }
}
