import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpException,
} from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { AttributionService } from 'src/attribution/attribution.service';
import { ReceptionService } from 'src/reception/reception.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { existsSync, unlinkSync } from 'fs';
import { compareDesc } from 'date-fns';

@Controller('produits')
export class ProduitsController {
  constructor(
    private readonly produitsService: ProduitsService,
    private readonly attrService: AttributionService,
    private readonly receptService: ReceptionService,
  ) {}

  @Post()
  async create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitsService.create(createProduitDto);
  }

  @Get()
  async findAll() {
    const ps = (await this.produitsService.findAll()) as any;
    const o = await Promise.all(
      ps.map(async (p) => {
        const atts = await this.attrService.findByProduit(p._id.toString());
        const receps = await this.receptService.findByProduit(p._id.toString());
        const qatt = atts
          .map((e) => e.produits)
          .reduce(
            (acc, cur) =>
              acc +
                cur.find(
                  (el) =>
                    el.produit &&
                    el.produit?._id.toString() === p._id.toString(),
                )?.qte ?? 0,
            0,
          );

        const recp = receps
          .map((e) => e.produits)
          .reduce(
            (acc, cur) =>
              acc +
                cur.find(
                  (el) => el.produit?._id.toString() === p._id.toString(),
                )?.qte ?? 0,
            0,
          );
        const rs = recp - qatt;
        return { ...p._doc, quantite: rs };
      }),
    );
    return o.sort((a, b) => compareDesc(a.date, b.date),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.produitsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProduitDto: UpdateProduitDto,
  ) {
    return this.produitsService.update(id, updateProduitDto);
  }

  @Patch('photo/:id')
  @UseInterceptors(FileInterceptor('photo'))
  async updatePhoto(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    if (file) {
      const p = await this.produitsService.update(id, { photo: file.filename });
      if (p && existsSync('uploads/produits/' + p.photo)) {
        unlinkSync('uploads/produits/' + p.photo);
      }
      return p;
    }
    throw new HttpException('image non sauvegarde', 500);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.produitsService.remove(id);
  }
}
