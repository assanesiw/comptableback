import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Produit, ProduitSchema } from './entities/produit.entity';
import { AttributionModule } from 'src/attribution/attribution.module';
import { ReceptionModule } from 'src/reception/reception.module';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/produits');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  },
});

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Produit.name,
        useFactory: () => {
          const schema = ProduitSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),
    AttributionModule,
    ReceptionModule,
    MulterModule.register({
      storage,
    }),
  ],

  controllers: [ProduitsController],
  providers: [ProduitsService],
})
export class ProduitsModule {}
