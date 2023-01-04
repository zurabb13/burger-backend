import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = UsersMod & Document;

@Schema()
export class UsersMod {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UsersMod);
