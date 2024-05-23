import { Module } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { CatalogueController } from './catalogue.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Catalogue, CatalogueShema } from './entities/catalogue.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Catalogue.name, schema: CatalogueShema },
    ]),
  ],
  controllers: [CatalogueController],
  providers: [CatalogueService],
})
export class CatalogueModule {}
