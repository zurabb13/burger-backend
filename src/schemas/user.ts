import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = UsersMod & Document;

@Schema()
export class UsersMod {
  @Prop()
  id: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  // @Prop()
  // confirmPassword: string;

  @Prop()
  address: string;

  @Prop()
  isAdmin: boolean;

  @Prop()
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(UsersMod);
