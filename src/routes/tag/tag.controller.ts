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
    const tags = await this.tagService.tagSearch(tagName);
    return tags;
  }
}
