/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateAttributionDto } from './dto/create-attribution.dto';
import { UpdateAttributionDto } from './dto/update-attribution.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attribution } from './entities/attribution.entity';

@Injectable()
export class AttributionService {
  constructor(
    @InjectModel(Attribution.name)
    private readonly AttributionModel: Model<Attribution>,
  ) {}

  async create(
    CreateAttributionDto: CreateAttributionDto,
  ): Promise<Attribution> {
    const p = new this.AttributionModel(CreateAttributionDto);
    return await p.save();
  }

  async findAll(): Promise<Attribution[]> {
    return await this.AttributionModel.find();
  }

  async findOne(id: string) {
    return await this.AttributionModel.findById(id);
  }

  async findByProduit(id: string): Promise<Attribution[]> {
    return await this.AttributionModel.find({ 'produits.produit': id });
  }

  async update(id: string, updateAttributionDto: UpdateAttributionDto) {
    // eslint-disable-next-line prettier/prettier
    return await this.AttributionModel.findByIdAndUpdate(id, updateAttributionDto);
  }

  async remove(id: string) {
    return await this.AttributionModel.findByIdAndDelete(id);
  }
}
