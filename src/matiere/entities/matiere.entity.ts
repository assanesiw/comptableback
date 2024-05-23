import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MatiereDocument = HydratedDocument<Matiere>;
@Schema()
export class Matiere {
  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: String, required: true })
  produit: string;

  @Prop({ type: String, required: true })
  categorie: string;

  @Prop({ type: String, required: true })
  quantite: string;

  @Prop({ type: String, required: true })
  observation: string;
}

export const MatiereSchema = SchemaFactory.createForClass(Matiere);
