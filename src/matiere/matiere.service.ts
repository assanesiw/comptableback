import { Injectable } from '@nestjs/common';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Matiere } from './entities/matiere.entity';
import { Model } from 'mongoose';

@Injectable()
export class MatiereService {
  constructor(
    @InjectModel(Matiere.name) private readonly matiereModel: Model<Matiere>,
  ) {}

  async create(createMatiereDto: CreateMatiereDto): Promise<Matiere> {
    const p = new this.matiereModel(createMatiereDto);
    return await p.save();
  }

  async findAll(): Promise<Matiere[]> {
    return await this.matiereModel.find();
  }

  async findOne(id: string) {
    return await this.matiereModel.findById(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, updateMatiereDto: UpdateMatiereDto) {
    return await this.matiereModel.findByIdAndUpdate(id);
  }

  async remove(id: string) {
    return await this.matiereModel.findByIdAndDelete(id);
  }
}
