import { Module } from '@nestjs/common';
import { ReceptionService } from './reception.service';
import { ReceptionController } from './reception.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProduitSchema,
  Reception,
  ReceptionSchema,
  pSchema,
} from './entities/reception.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Reception.name,
        useFactory: () => {
          const schema = ReceptionSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-serial'), { field: 'n_bon' });
          return schema;
        },
      },
      {
        name: ProduitSchema.name,
        useFactory: () => {
          const schema = pSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),
  ],
  controllers: [ReceptionController],
  providers: [ReceptionService],
  exports: [ReceptionService],
})
export class ReceptionModule {}
