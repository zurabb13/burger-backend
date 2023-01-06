import { Controller, Get, Param } from '@nestjs/common';
import { Product } from '../../schemas/products';
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
