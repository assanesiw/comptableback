import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';

@Controller('matiere')
export class MatiereController {
  constructor(private readonly matiereService: MatiereService) {}

  @Post()
  async create(@Body() createMatiereDto: CreateMatiereDto) {
    return this.matiereService.create(createMatiereDto);
  }

  @Get()
  async findAll() {
    return this.matiereService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.matiereService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMatiereDto: UpdateMatiereDto,
  ) {
    return this.matiereService.update(id, updateMatiereDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.matiereService.remove(id);
  }
}
