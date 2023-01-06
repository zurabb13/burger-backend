import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../../schemas/products';
import { Model } from 'mongoose';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Product.name) private searchModel: Model<ProductDocument>,
  ) {}

  async searchProduct(name): Promise<Product[]> {
    const searchRg = new RegExp(name, 'i');
    return this.searchModel.find({ name: { $regex: searchRg } }).exec();
  }
}
