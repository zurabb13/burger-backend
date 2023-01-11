import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserAuthDocument = UserAuthorization & Document;

@Schema()
export class UserAuthorization {
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  access_token: string;
}
export const UserAutoSchema = SchemaFactory.createForClass(UserAuthorization);
