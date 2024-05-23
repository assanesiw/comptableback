/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateMembreDto } from './dto/create-membre.dto';
import { UpdateMembreDto } from './dto/update-membre.dto';
import { Membre } from './entities/membre.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MembresService {
  constructor(
    @InjectModel(Membre.name) private readonly MembreModel: Model<Membre>,
  ) {}

  async create(createMembreDto: CreateMembreDto): Promise<Membre> {
    const p = new this.MembreModel(createMembreDto);
    return await p.save();
  }

  async findAll(): Promise<Membre[]> {
    return await this.MembreModel.find();
  }

  async findOne(id: string) {
    return await this.MembreModel.findById(id);
  }

  async update(id: string, updateMembreDto: UpdateMembreDto) {
    return await this.MembreModel.findByIdAndUpdate(id, updateMembreDto);
  }

  async remove(id: string) {
    return await this.MembreModel.findByIdAndDelete(id);
  }
}
