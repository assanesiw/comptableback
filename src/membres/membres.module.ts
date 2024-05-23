import { Module } from '@nestjs/common';
import { MembresService } from './membres.service';
import { MembresController } from './membres.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Membre, MembreSchema } from './entities/membre.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Membre.name, schema: MembreSchema }]),
  ],
  controllers: [MembresController],
  providers: [MembresService],
})
export class MembresModule {}
