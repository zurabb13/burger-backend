import { Controller, Get, Param } from '@nestjs/common';
import { Product } from '../../schemas/products';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Get(':id')
  async searchFood(@Param('id') id: string): Promise<Product[]> {
    return this.searchService.searchProduct(id);
  }
}
