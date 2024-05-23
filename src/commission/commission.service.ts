/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateCommissionDto } from './dto/create-commission.dto';
import { UpdateCommissionDto } from './dto/update-commission.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Commission, CommissionDocument } from './entities/commission.entity';

@Injectable()
export class CommissionService {
  constructor(
    @InjectModel(Commission.name)
    private readonly CommissionModel: Model<CommissionDocument>,
  ) {}
  async create(createCommissionDto: CreateCommissionDto): Promise<Commission> {
    const p = new this.CommissionModel(createCommissionDto);
    return await p.save();
  }

  async findAll(): Promise<Commission[]> {
    return await this.CommissionModel.find();
  }

  async findOne(id: string) {
    return await this.CommissionModel.findById(id);
  }

  async update(id: string, updateCommissionDto: UpdateCommissionDto) {
    return await this.CommissionModel.findByIdAndUpdate(
      id,
      updateCommissionDto,
    );
  }

  async remove(id: string) {
    return await this.CommissionModel.findByIdAndDelete(id);
  }
}
