import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { v4 as uuidv4 } from 'uuid';

export enum TypeProduit {
  MAGASIN_1 = 'magasin 1',
  MAGASIN_2 = 'magasin 2',
  MAGASIN_3 = 'magasin 3',
  MAGASIN_4 = 'magasin 4',
  MAGASIN_5 = 'magasin 5',
  MAGASIN_6 = 'magasin 6',
  MAGASIN_7 = 'magasin 7',
}
export type ProduitDocument = HydratedDocument<Produit>;

@Schema()
export class Produit {
  _id: string;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: String })
  photo: string;

  @Prop({ type: String, required: true })
  catalogue: string;

  @Prop({
    type: Types.ObjectId,
    ref: Catalogue.name,
    required: true,
    autopopulate: true,
  })
  cat: Catalogue;

  @Prop({ type: String, required: true })
  uniteConditionnement: string;

  @Prop({ type: String, required: true, default: uuidv4 })
  code: string;

  @Prop({
    type: String,
    enum: TypeProduit,
    default: TypeProduit.MAGASIN_1,
    required: true,
  })
  emplacement: TypeProduit;

  @Prop({ type: String, required: true })
  prixUnitaire: string;

  @Prop({ type: String, required: true })
  observation: string;
}

export const ProduitSchema = SchemaFactory.createForClass(Produit);
