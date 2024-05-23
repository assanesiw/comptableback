import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFournisseurDto {
  @IsNotEmpty()
  @IsString()
  nom_entreprise: string;

  @IsNotEmpty()
  @IsString()
  ninea: string;

  @IsNotEmpty()
  @IsString()
  rc: string;

  @IsNotEmpty()
  @IsString()
  service: string;

  @IsNotEmpty()
  @IsString()
  adresse: string;

  @IsNotEmpty()
  @IsString()
  telephone: string;
}
