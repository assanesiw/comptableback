import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuiviService } from './suivi.service';
import { CreateSuiviDto } from './dto/create-suivi.dto';
import { UpdateSuiviDto } from './dto/update-suivi.dto';

@Controller('suivi')
export class SuiviController {
  constructor(private readonly suiviService: SuiviService) {}

  @Post()
  create(@Body() createSuiviDto: CreateSuiviDto) {
    return this.suiviService.create(createSuiviDto);
  }

  @Get()
  findAll() {
    return this.suiviService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suiviService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuiviDto: UpdateSuiviDto) {
    return this.suiviService.update(id, updateSuiviDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suiviService.remove(id);
  }
}
