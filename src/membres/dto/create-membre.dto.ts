import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMembreDto {
  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  fonction: string;

  @IsNotEmpty()
  @IsString()
  telephone: Date;
}
