import { Injectable } from '@nestjs/common';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Catalogue } from './entities/catalogue.entity';

@Injectable()
export class CatalogueService {
  constructor(
    @InjectModel(Catalogue.name)
    private readonly catalogueModel: Model<Catalogue>,
  ) {}

  async create(createCatalogueDto: CreateCatalogueDto): Promise<Catalogue> {
    const p = new this.catalogueModel(createCatalogueDto);
    return await p.save();
  }

  async findAll(): Promise<Catalogue[]> {
    return await this.catalogueModel.find();
  }

  async findOne(id: string) {
    return await this.catalogueModel.findById(id);
  }

  async update(id: string, updateCatalogueDto: UpdateCatalogueDto) {
    return await this.catalogueModel.findByIdAndUpdate(id, updateCatalogueDto);
  }

  async remove(id: string) {
    return await this.catalogueModel.findByIdAndDelete(id);
  }
}
