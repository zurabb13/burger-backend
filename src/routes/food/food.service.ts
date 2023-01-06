import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../../schemas/products';
import { Model } from 'mongoose';

@Injectable()
export class FoodService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async product(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
  async search(id): Promise<Product> {
    return this.productModel.findOne({ id: id }).exec();
  }
}
