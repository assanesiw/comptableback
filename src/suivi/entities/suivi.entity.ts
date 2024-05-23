import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum TypeSuivi {
  CONS = 'CONSTRUCTION',
  REF = 'REFECTION',
  ENTR = 'ENTRETIEN',
  HEB = 'SERVICE HEBERGEMENT',
  RES = 'SERVICE RESTAURATION',
  TWO = 'SERVICE HEBERGEMENT ET RESTAURATION',
  VID = 'VIDANCE',
}
export type SuiviDocument = HydratedDocument<Suivi>;
@Schema()
export class Suivi {
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({
    type: String,
    enum: TypeSuivi,
    default: TypeSuivi.ENTR,
    required: true,
  })
  type: TypeSuivi;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  service: string;

  @Prop({ type: String, required: true })
  facture: string;

  @Prop({ type: String, required: true })
  montant: string;
}
export const SuiviSchema = SchemaFactory.createForClass(Suivi);
