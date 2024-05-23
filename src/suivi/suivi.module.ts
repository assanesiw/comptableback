import { Module } from '@nestjs/common';
import { SuiviService } from './suivi.service';
import { SuiviController } from './suivi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Suivi, SuiviSchema } from './entities/suivi.entity';

@Module({
  imports: [
    // eslint-disable-next-line prettier/prettier
    MongooseModule.forFeature([{ name: Suivi.name, schema: SuiviSchema }]),
  ],
  controllers: [SuiviController],
  providers: [SuiviService],
})
export class SuiviModule {}
