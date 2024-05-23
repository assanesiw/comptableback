import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuiviDto {
  @IsNotEmpty()
  @IsString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  service: string;

  @IsNotEmpty()
  @IsString()
  facture: string;

  @IsNotEmpty()
  @IsString()
  montant: string;
}
