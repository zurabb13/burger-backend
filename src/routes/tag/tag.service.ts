import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../../schemas/products';
import { Model } from 'mongoose';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Product.name) private tagModel: Model<ProductDocument>,
  ) {}
  async tagSearch(id): Promise<Product[]> {
    const tagRgx = new RegExp(id, 'i');
    return this.tagModel.find({ name: { $regex: tagRgx } }).exec();
  }
  async allTag(): Promise<Product[]> {
    return this.tagModel.find().exec();
  }
}
