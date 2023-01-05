import { Controller, Get, Param, Res } from '@nestjs/common';
import { simple_food } from '../../data';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../../schemas/products';

@Controller('food')
export class FoodController {
  constructor(
    @InjectModel(Product.name) private foodsModel: Model<ProductDocument>,
  ) {}
  @Get(':foodId')
  getFoodId(@Param('foodId') foodId: string, @Res() res) {
    const food = simple_food.find((food) => food.id === foodId);
    if (!food) {
      res.status(404).send({ error: 'Food Item not found' });
    } else {
      res.send(food);
    }
  }
}
