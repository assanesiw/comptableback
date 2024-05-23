import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Produit } from 'src/produits/entities/produit.entity';

export type InventaireDocument = HydratedDocument<Inventaire>;
@Schema()
export class Inventaire {
  @Prop({ type: Types.ObjectId, ref: Produit.name, required: true })
  produit: string;

  @Prop({ type: String, required: true })
  quantite: string;

  @Prop({ type: String, required: true })
  emplacement: string;
}

export const InventaireSchema = SchemaFactory.createForClass(Inventaire);
