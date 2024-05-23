import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MembreDocument = HydratedDocument<Membre>;
@Schema({ timestamps: true })
export class Membre {
  @Prop({ type: String, required: true })
  prenom: string;

  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: String, required: true })
  fonction: string;

  @Prop({ type: String, required: true })
  telephone: string;
}

export const MembreSchema = SchemaFactory.createForClass(Membre);
