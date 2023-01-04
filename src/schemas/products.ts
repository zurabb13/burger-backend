import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  tag: string;

  @Prop({ required: true })
  favorite: string;

  @Prop({ required: true })
  stars: number;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  origins: string[];

  @Prop({ required: true })
  cookTime: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
