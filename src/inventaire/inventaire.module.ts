import { Module } from '@nestjs/common';
import { InventaireService } from './inventaire.service';
import { InventaireController } from './inventaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Inventaire, InventaireSchema } from './entities/inventaire.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inventaire.name, schema: InventaireSchema },
    ]),
  ],
  controllers: [InventaireController],
  providers: [InventaireService],
})
export class InventaireModule {}
