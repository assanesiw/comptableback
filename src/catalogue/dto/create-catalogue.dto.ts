import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCatalogueDto {
  @IsNotEmpty()
  @IsString()
  categorie: string;
}
