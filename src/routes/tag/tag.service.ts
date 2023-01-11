import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../../schemas/products';
import { Model } from 'mongoose';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Product.name) public tagModel: Model<ProductDocument>,
  ) {}

  // async allTag(): Promise<Product[]> {
  //   return this.tagModel.find().exec();
  // }

  async getAllTag() {
    const tags = await this.tagModel
      .aggregate([
        { $unwind: '$tags' },
        {
          $group: {
            _id: '$tags',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            name: `$_id`,
            count: '$count',
          },
        },
      ])
      .sort({ count: -1 })
      .exec();
    const all = {
      name: 'All',
      count: await this.tagModel.countDocuments(),
    };
    tags.unshift(all);
    return tags;
  }
  async tagSearch(tagName: string) {
    const tag = await this.tagModel.find({ tags: { $in: [tagName] } });
    return tag;
  }
}
