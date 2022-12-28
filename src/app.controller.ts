import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { sample_tags, simple_food } from './data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  getTagName(@Param('tagName') tagName: string, @Res() res) {
    const tags = simple_food.filter((food) =>
      food.name.toLowerCase().includes(tagName.toLowerCase()),
    );
    res.send(tags);
  }
  @Get('food/:foodId')
  getFoodId(@Param('foodId') foodId: string, @Res() res) {
    const food = simple_food.find((food) => food.id == foodId);
    res.send(food);
  }
}
