import { Injectable } from '@nestjs/common';
import { CreateReceptionDto } from './dto/create-reception.dto';
import { UpdateReceptionDto } from './dto/update-reception.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reception } from './entities/reception.entity';

@Injectable()
export class ReceptionService {
  constructor(
    @InjectModel(Reception.name)
    private readonly receptionModel: Model<Reception>,
  ) {}

  async create(createReceptionDto: CreateReceptionDto): Promise<Reception> {
    const p = new this.receptionModel(createReceptionDto);
    return await p.save();
  }

  async findAll(): Promise<Reception[]> {
    return await this.receptionModel.find();
  }

  async findOne(id: string) {
    return await this.receptionModel.findById(id);
  }

  async findByProduit(id: string): Promise<Reception[]> {
    return await this.receptionModel.find({ 'produits.produit': id });
  }

  async update(id: string, updateReceptionDto: UpdateReceptionDto) {
    return await this.receptionModel.findByIdAndUpdate(id, updateReceptionDto);
  }

  async remove(id: string) {
    return await this.receptionModel.findByIdAndDelete(id);
  }
}
