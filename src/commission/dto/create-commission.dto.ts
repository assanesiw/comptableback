import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommissionDto {
  @IsNotEmpty()
  @IsString()
  nom_commission: string;

  @IsNotEmpty()
  @IsArray()
  membres: string[];
}
