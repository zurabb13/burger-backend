import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../../schemas/products';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [FoodService],
  controllers: [FoodController],
})
export class FoodModule {}
