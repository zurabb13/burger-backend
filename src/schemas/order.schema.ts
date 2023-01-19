import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Order } from './latlng.schema';
import { OrderItemDocument, OrderItemsSchema } from './orderItemsSchema';
import { OrderStatusEnum } from '../common/enum/order.enum';
import any = jasmine.any;
import { OrderS } from '../common/interfaces/order';
import { UsersMod } from './user';

export type OrderSchemaDocument = OrderSchema & Document;
@Schema()
export class OrderSchema {
  @Prop({ required: true })
  name: string;
  @Prop({
    type: [{ type: mongoose.Types.ObjectId }, { ref: Order.name }],
    required: true,
  })
  address: string;
  @Prop({ required: true })
  paymentId: string;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({
    type: [{ type: mongoose.Types.ObjectId }, { ref: OrderItemsSchema }],
    required: true,
  })
  items: OrderItemDocument[];

  @Prop({ required: true })
  status: OrderStatusEnum.NEW;

  @Prop({
    type: [{ type: mongoose.Types.ObjectId }, { ref: UsersMod }],
    required: true,
  })
  user: UsersMod[];
}

export const OrderSchemaFactory = SchemaFactory.createForClass(OrderSchema);
