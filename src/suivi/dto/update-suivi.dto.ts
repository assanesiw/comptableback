import { PartialType } from '@nestjs/mapped-types';
import { CreateSuiviDto } from './create-suivi.dto';

export class UpdateSuiviDto extends PartialType(CreateSuiviDto) {}
