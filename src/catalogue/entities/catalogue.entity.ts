import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatalogueDocument = HydratedDocument<Catalogue>;

@Schema()
export class Catalogue {
  @Prop({ type: String, required: true })
  categorie: string;
}

export const CatalogueShema = SchemaFactory.createForClass(Catalogue);
