import { Injectable } from '@nestjs/common';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produit } from './entities/produit.entity';
import { CreateProduitDto } from './dto/create-produit.dto';

@Injectable()
export class ProduitsService {
  constructor(
    @InjectModel(Produit.name) private readonly produitModel: Model<Produit>,
  ) {}

  async create(createProduitDto: CreateProduitDto): Promise<Produit> {
    const p = new this.produitModel(createProduitDto);
    return await p.save();
  }

  async findAll(): Promise<Produit[]> {
    return await this.produitModel.find();
  }

  async findOne(id: string) {
    return await this.produitModel.findById(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: string, updateProduitDto: UpdateProduitDto) {
    return await this.produitModel.findByIdAndUpdate(id, updateProduitDto);
  }

  async remove(id: string) {
    return await this.produitModel.findByIdAndDelete(id);
  }
}
