import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true, unique: true })
  email: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true, unique: true })
  password: string;

  // @Prop({ type: [{ type: mongoose.Schema.Types.String, ref: 'Habit' }] })
  // habits: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
