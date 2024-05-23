import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProduitDto {
  @IsOptional()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsDateString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  catalogue: string[];

  @IsNotEmpty()
  @IsString()
  cat: string[];

  @IsOptional()
  @IsNumber()
  quantite: number;

  @IsNotEmpty()
  @IsString()
  uniteCondionnememt: string;

  @IsNotEmpty()
  @IsString()
  emplacement: string;

  @IsNotEmpty()
  @IsString()
  prixUnitaire: string;

  @IsNotEmpty()
  @IsString()
  observation: string;
}
