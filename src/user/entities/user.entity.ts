import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum USER_ROLE {
  ADMIN = 'admin',
  CM = 'cm',
  CSA = 'csa',
}

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id: string;

  @Prop({ type: String, unique: true, required: true })
  login: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  prenom: string;

  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: String, default: USER_ROLE.ADMIN })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
