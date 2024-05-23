import { Injectable } from '@nestjs/common';
import { CreateInventaireDto } from './dto/create-inventaire.dto';
import { UpdateInventaireDto } from './dto/update-inventaire.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Inventaire } from './entities/inventaire.entity';
import { Model } from 'mongoose';

@Injectable()
export class InventaireService {
  constructor(
    @InjectModel(Inventaire.name)
    private readonly InventaireModel: Model<Inventaire>,
  ) {}
  async create(createInventaireDto: CreateInventaireDto): Promise<Inventaire> {
    const p = new this.InventaireModel(createInventaireDto);
    return await p.save();
  }

  async findAll(): Promise<Inventaire[]> {
    return await this.InventaireModel.find();
  }

  async findOne(id: string) {
    return await this.InventaireModel.findById(id);
  }

  async update(id: string, updateInventaireDto: UpdateInventaireDto) {
    return await this.InventaireModel.findByIdAndUpdate(
      id,
      updateInventaireDto,
    );
  }

  async remove(id: string) {
    return await this.InventaireModel.findByIdAndRemove(id);
  }
}
