/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fournisseur } from './entities/fournisseur.entity';
import { Model } from 'mongoose';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';

@Injectable()
export class FournisseurService {
  constructor(
    @InjectModel(Fournisseur.name) private readonly fournisseurModel: Model<Fournisseur>,
  ) {}

  async create(createFournisseurDto: CreateFournisseurDto): Promise<Fournisseur> {
    const p = new this.fournisseurModel(createFournisseurDto);
    return await p.save();
  }

  async findAll(): Promise<Fournisseur[]> {
    return await this.fournisseurModel.find();
  }

  async findOne(id: string) {
    return await this.fournisseurModel.findById(id);
  }

  async update(id: string, updateFournisseurDto: UpdateFournisseurDto) {
    // eslint-disable-next-line prettier/prettier
    return await this.fournisseurModel.findByIdAndUpdate(id, updateFournisseurDto);
  }

  async remove(id: string) {
    return await this.fournisseurModel.findByIdAndDelete(id);
  }
}
