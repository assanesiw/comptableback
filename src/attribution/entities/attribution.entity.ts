import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Produit } from 'src/produits/entities/produit.entity';
import { v4 as uuidv4 } from 'uuid';

export enum TypeAttribution {
  PROVISOIRE = 'PROVISOIRE',
  DEFINITIVE = 'DEFINITIVE',
}

export type AttributionDocument = HydratedDocument<Attribution>;

@Schema()
export class ProduitSc {
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
export class Attribution {
  @Prop({ type: Date, required: true })
  date: Date;
  @Prop({
    type: [ProduitSc],
    required: true,
    autopopulate: { maxDepth: 3 },
  })
  produits: ProduitSc[];

  @Prop({ type: String, required: true })
  remis: string;

  @Prop({ type: String })
  num_bon: string;

  @Prop({ type: String, required: true })
  section: string;

  @Prop({ type: String, required: true })
  bon: string;

  @Prop({
    type: String,
    enum: TypeAttribution,
    default: TypeAttribution.PROVISOIRE,
    required: true,
  })
  sortis: TypeAttribution;

  @Prop({ type: String, required: true })
  ordre: string;

  @Prop({ type: String, required: true, default: uuidv4 })
  code: string;

  @Prop({ type: Boolean, required: true, default: false })
  est_valide: boolean;
}

export const AttributionSchema = SchemaFactory.createForClass(Attribution);
export const aSchema = SchemaFactory.createForClass(ProduitSc);
