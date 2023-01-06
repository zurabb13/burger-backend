import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDtoModel } from '../../dto/login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('regester')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getUserByUserName(@Param() param) {
    return this.userService.getUserByUserName(param.username);
  }
  @Post()
  registerUser(@Body() createUser: LoginDtoModel) {
    return this.userService.registerUser(createUser);
  }
}
