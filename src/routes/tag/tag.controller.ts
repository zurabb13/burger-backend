import { Controller, Get, Param } from '@nestjs/common';
import { TagService } from './tag.service';
import { Product } from '../../schemas/products';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  async getTag(): Promise<Product[]> {
    return await this.tagService.allTag();
  }

  @Get(':tagName')
  async searchFoodByTag(@Param('tagName') tagName: string): Promise<Product[]> {
    return await this.tagService.tagSearch(tagName);
  }
}
