import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../../../common/base.schema';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends BaseSchema {
  @Prop()
  full_name: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  age: number;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
