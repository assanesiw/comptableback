import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export type PDT = { produit: string; qte: string };

export class CreateReceptionDto {
  @IsNotEmpty()
  @IsString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  numero_bon: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsArray({ each: true })
  produits: PDT[];

  @IsNotEmpty()
  @IsString()
  commission: string[];

  @IsNotEmpty()
  @IsString()
  fournisseur: string;
}
