import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';

@Controller('fournisseur')
export class FournisseurController {
  constructor(private readonly fournisseurService: FournisseurService) {}

  @Post()
  async create(@Body() createFournisseurDto: CreateFournisseurDto) {
    return this.fournisseurService.create(createFournisseurDto);
  }

  @Get()
  async findAll() {
    return this.fournisseurService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.fournisseurService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFournisseurDto: UpdateFournisseurDto,
  ) {
    return this.fournisseurService.update(id, updateFournisseurDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.fournisseurService.remove(id);
  }
}
