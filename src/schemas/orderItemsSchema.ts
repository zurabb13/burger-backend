import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Product } from './products';

export type OrderItemDocument = OrderItemsSchema & Document;
@Schema()
export class OrderItemsSchema {
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId }, { ref: Product.name }],
    required: true,
  })
  food: Product[];
}
