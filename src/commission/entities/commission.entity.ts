import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { HydratedDocument, Types } from 'mongoose';
import { Membre } from 'src/membres/entities/membre.entity';

export type CommissionDocument = HydratedDocument<Commission>;
@Schema({ timestamps: true })
export class Commission {
  @Prop({ type: String, required: true })
  nom_commission: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: Membre.name, autopopulate: true }],
    required: true,
  })
  @Type(() => Membre)
  membres: Membre[];
}
export const CommissionSchema = SchemaFactory.createForClass(Commission);
