import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum USER_ROLE {
  ADMIN = 'admin',
  Directeur = 'directeur',
  CM = 'CM',
  CSA = 'CSA',
  CSAP = 'CSAP',
  GES_STOCK = 'GES_STOCK',
  CONTROLE = 'CONTROLE',
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

  @Prop({ type: Boolean, required: true, default: true })
  IsActif: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
