import { Module } from '@nestjs/common';
import { AttributionService } from './attribution.service';
import { AttributionController } from './attribution.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Attribution,
  AttributionSchema,
  aSchema,
  ProduitSc,
} from './entities/attribution.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Attribution.name,
        useFactory: () => {
          const schema = AttributionSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-serial'), { field: 'num_bon' });
          return schema;
        },
      },
      {
        name: ProduitSc.name,
        useFactory: () => {
          const schema = aSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),
  ],
  controllers: [AttributionController],
  providers: [AttributionService],
  exports: [AttributionService],
})
export class AttributionModule {}
