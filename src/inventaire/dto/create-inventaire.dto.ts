import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInventaireDto {
  @IsNotEmpty()
  @IsString()
  produit: string;

  @IsNotEmpty()
  @IsString()
  quantite: string;

  @IsNotEmpty()
  @IsString()
  emplacement: string;
}
