import { Controller, Get, Param } from '@nestjs/common';
import { TagService } from './tag.service';
import { Product } from '../../schemas/products';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  async getTag() {
    return await this.tagService.getAllTag();
  }

  @Get(':tagName')
  async searchFoodByTag(@Param('tagName') tagName: string) {
    // return await this.tagService.tagSearch(tagName);
    const foods = await this.tagService.tagModel.find({
      tags: { $in: [tagName] },
    });
    return foods;
  }
}
