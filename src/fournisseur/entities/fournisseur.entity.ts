import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Produit } from 'src/produits/entities/produit.entity';

export type FournisseurDocument = HydratedDocument<Fournisseur>;

@Schema()
export class Fournisseur {
  @Prop({ type: String, required: true })
  nom_entreprise: string;

  @Prop({ type: String, required: true })
  ninea: string;

  @Prop({ type: String, required: true })
  rc: string;

  @Prop({ type: Types.ObjectId, ref: Produit.name, required: true })
  service: string;

  @Prop({ type: String, required: true })
  adresse: string;

  @Prop({ type: String, required: true })
  telephone: string;
}

export const FournisseurSchema = SchemaFactory.createForClass(Fournisseur);
