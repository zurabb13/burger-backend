import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { sample_tags, simple_food } from './data';
import { Request, Response } from 'express';
import { UsersService } from './users/users.service';
import { User } from './models/user-models';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UsersService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
  @Get('search/:searchTerm')
  searchFood(@Param('searchTerm') searchTerm: string, @Res() res) {
    const food = simple_food.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    res.send(food);
  }
  @Get('tag')
  getTag(@Res() res) {
    res.send(sample_tags);
  }
  @Get('tag/:tagName')
  searchFoodByTag(@Param('tagName') tagName: string, @Res() res) {
    const food = simple_food.filter((food) => food.tags?.includes(tagName));
    res.send(food);
  }
  @Get('food/:foodId')
  getFoodId(@Param('foodId') foodId: string, @Res() res) {
    const food = simple_food.find((food) => food.id == foodId);
    if (!food) {
      res.status(404).send({ error: 'Food item not found' });
    } else {
      res.send(food);
    }
  }
  // @UseGuards(AuthGuard('local'))
  @Post('login')
  login(
    @Body() body: { email: string; password: string },
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { email, password } = body;
    const user = this.userService.findOne(email);
    if (user && user.password === password) {
      res.send(gToken(user));
    } else {
      res.status(400).send('error');
    }
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
