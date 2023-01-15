import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../../common/services/auth/auth.service';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
}
