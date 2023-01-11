import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  tags: string[];

  @Prop({ default: false })
  favorite: boolean;

  @Prop({ required: true })
  stars: number;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  origins: string[];

  @Prop({ required: true })
  cookTime: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
