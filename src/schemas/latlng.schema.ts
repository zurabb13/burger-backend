import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LatLng } from '../common/interfaces/latlng';

export type LatLngDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  lat: string;

  @Prop({ required: true })
  lnt: string;
}

export const LatLngSchema = SchemaFactory.createForClass(Order);
