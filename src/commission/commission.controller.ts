import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommissionService } from './commission.service';
import { CreateCommissionDto } from './dto/create-commission.dto';
import { UpdateCommissionDto } from './dto/update-commission.dto';

@Controller('commission')
export class CommissionController {
  constructor(private readonly commissionService: CommissionService) {}

  @Post()
  async create(@Body() createCommissionDto: CreateCommissionDto) {
    return this.commissionService.create(createCommissionDto);
  }

  @Get()
  async findAll() {
    return this.commissionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.commissionService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCommissionDto: UpdateCommissionDto,
  ) {
    return this.commissionService.update(id, updateCommissionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.commissionService.remove(id);
  }
}
