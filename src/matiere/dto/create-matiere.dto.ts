import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMatiereDto {
  @IsNotEmpty()
  @IsString()
  produit: string;

  @IsNotEmpty()
  @IsString()
  categorie: string;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsString()
  observation: string;

  @IsNotEmpty()
  @IsString()
  quantite: string;
}
