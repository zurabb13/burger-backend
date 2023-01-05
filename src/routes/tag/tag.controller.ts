import { Controller, Get, Param, Res } from '@nestjs/common';
import { sample_tags, simple_food } from '../../data';

@Controller('tag')
export class TagController {
  @Get()
  getTag(@Res() res) {
    res.send(sample_tags);
  }

  @Get(':tagName')
  searchFoodByTag(@Param('tagName') tagName: string, @Res() res) {
    const food = simple_food.filter((food) => food.tags?.includes(tagName));
    res.send(food);
  }
}
