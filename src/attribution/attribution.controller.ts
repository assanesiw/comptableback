import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttributionService } from './attribution.service';
import { CreateAttributionDto } from './dto/create-attribution.dto';
import { UpdateAttributionDto } from './dto/update-attribution.dto';

@Controller('attribution')
export class AttributionController {
  constructor(private readonly attributionService: AttributionService) {}

  @Post()
  async create(@Body() createAttributionDto: CreateAttributionDto) {
    return this.attributionService.create(createAttributionDto);
  }

  @Get()
  async findAll() {
    return this.attributionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.attributionService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAttributionDto: UpdateAttributionDto,
  ) {
    return this.attributionService.update(id, updateAttributionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.attributionService.remove(id);
  }
}
