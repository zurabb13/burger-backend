import { Controller, Get, Param, Res } from '@nestjs/common';
import { simple_food } from '../../data';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../../schemas/products';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  async food(): Promise<Product[]> {
    return this.foodService.product();
  }
  @Get(':id')
  async foodId(@Param('id') id: string): Promise<Product> {
    return this.foodService.search(id);
  }
}
