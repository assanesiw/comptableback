import { Module } from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { MatiereController } from './matiere.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Matiere, MatiereSchema } from './entities/matiere.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Matiere.name, schema: MatiereSchema }]),
  ],
  controllers: [MatiereController],
  providers: [MatiereService],
})
export class MatiereModule {}
