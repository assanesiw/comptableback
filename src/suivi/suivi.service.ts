import { Injectable } from '@nestjs/common';
import { CreateSuiviDto } from './dto/create-suivi.dto';
import { UpdateSuiviDto } from './dto/update-suivi.dto';
import { Suivi } from './entities/suivi.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SuiviService {
  constructor(
    @InjectModel(Suivi.name)
    private readonly suiviModel: Model<Suivi>,
  ) {}

  async create(createSuiviDto: CreateSuiviDto): Promise<Suivi> {
    const p = new this.suiviModel(createSuiviDto);
    return await p.save();
  }

  async findAll(): Promise<Suivi[]> {
    return await this.suiviModel.find();
  }

  async findOne(id: string) {
    return await this.suiviModel.findById(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, UpdateSuiviDto: UpdateSuiviDto) {
    return await this.suiviModel.findByIdAndUpdate(id, UpdateSuiviDto);
  }

  async remove(id: string) {
    return await this.suiviModel.findByIdAndDelete(id);
  }
}
