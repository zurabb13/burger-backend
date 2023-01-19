import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  // @UseGuards(JwtAuthGuard)
  @Post('create')
  @HttpCode(HttpStatus.OK)
  async create(@Body() body: any, @Req() req: Request) {
    return await this.orderService.create(body);
  }
}
