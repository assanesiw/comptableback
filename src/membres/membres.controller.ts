import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembresService } from './membres.service';
import { CreateMembreDto } from './dto/create-membre.dto';
import { UpdateMembreDto } from './dto/update-membre.dto';

@Controller('membres')
export class MembresController {
  constructor(private readonly membresService: MembresService) {}

  @Post()
  create(@Body() createMembreDto: CreateMembreDto) {
    return this.membresService.create(createMembreDto);
  }

  @Get()
  findAll() {
    return this.membresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMembreDto: UpdateMembreDto) {
    return this.membresService.update(id, updateMembreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membresService.remove(id);
  }
}
