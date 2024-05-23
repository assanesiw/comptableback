import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventaireService } from './inventaire.service';
import { CreateInventaireDto } from './dto/create-inventaire.dto';
import { UpdateInventaireDto } from './dto/update-inventaire.dto';

@Controller('inventaire')
export class InventaireController {
  constructor(private readonly inventaireService: InventaireService) {}

  @Post()
  async create(@Body() createInventaireDto: CreateInventaireDto) {
    return this.inventaireService.create(createInventaireDto);
  }

  @Get()
  async findAll() {
    return this.inventaireService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.inventaireService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInventaireDto: UpdateInventaireDto,
  ) {
    return this.inventaireService.update(id, updateInventaireDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.inventaireService.remove(id);
  }
}
