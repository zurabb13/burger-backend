import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  tag: string;

  @Prop()
  favorite: string;

  @Prop()
  stars: number;

  @Prop()
  url: string;

  @Prop()
  origins: string[];

  @Prop()
  cookTime: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
