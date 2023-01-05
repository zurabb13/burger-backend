import { Controller, Get, Param, Res } from '@nestjs/common';
import { simple_food } from '../../data';

@Controller('search')
export class SearchController {
  @Get(':searchTerm')
  searchFood(@Param('searchTerm') searchTerm: string, @Res() res) {
    const food = simple_food.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    res.send(food);
  }
}
