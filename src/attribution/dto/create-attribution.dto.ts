import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export type PDT = { produit: string; qte: string };

export class CreateAttributionDto {
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsArray({ each: true })
  produits: PDT[];

  @IsNotEmpty()
  @IsString()
  remis: string;

  @IsNotEmpty()
  @IsString()
  section: string;

  @IsNotEmpty()
  @IsString()
  bon: string;

  @IsNotEmpty()
  @IsString()
  sortis: string;

  @IsNotEmpty()
  @IsString()
  ordre: string;

  @IsOptional()
  @IsBoolean()
  est_valide: boolean;
}
