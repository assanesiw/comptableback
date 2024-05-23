import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Commission } from 'src/commission/entities/commission.entity';
import { Produit } from 'src/produits/entities/produit.entity';
import { v4 as uuidv4 } from 'uuid';

export enum TypeReception {
  PRET = 'PRET',
  COMMANDE = 'COMMANDE',
  DON = 'DON',
}
export type ReceptionDocument = HydratedDocument<Reception>;

@Schema()
export class ProduitSchema {
  @Prop({
    type: Types.ObjectId,
    ref: Produit.name,
    required: true,
    autopopulate: true,
  })
  produit: Produit;

  @Prop({ type: Number, required: true })
  qte: number;
}

@Schema({ timestamps: true })
export class Reception {
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: String, required: true })
  numero_bon: string;

  @Prop({ type: String, required: true })
  fournisseur: string;

  @Prop({ type: String })
  n_bon: string;

  @Prop({ type: String, required: true, default: uuidv4 })
  code: string;

  @Prop({
    type: String,
    enum: TypeReception,
    default: TypeReception.COMMANDE,
    required: true,
  })
  type: TypeReception;

  @Prop({
    type: [ProduitSchema],
    required: true,
    autopopulate: { maxDepth: 3 },
  })
  produits: ProduitSchema[];

  @Prop({
    type: Types.ObjectId,
    ref: Commission.name,
    autopopulate: true,
    required: true,
  })
  commission: Commission;
}
export const ReceptionSchema = SchemaFactory.createForClass(Reception);
export const pSchema = SchemaFactory.createForClass(ProduitSchema);
