import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema, OrderSchemaFactory } from '../../schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderSchema.name, schema: OrderSchemaFactory },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
