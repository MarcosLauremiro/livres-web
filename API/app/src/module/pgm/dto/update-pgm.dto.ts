import { PartialType } from '@nestjs/swagger';
import { CreatePgmDto } from './create-pgm.dto';

export class UpdatePgmDto extends PartialType(CreatePgmDto) {}
