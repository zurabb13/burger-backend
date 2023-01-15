import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = UsersMod & Document;

@Schema()
export class UsersMod {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true,
  })
  _id: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  // @Prop()
  // confirmPassword: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  isAdmin: boolean;

  @Prop({ required: true })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(UsersMod);
