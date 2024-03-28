import { PartialType } from '@nestjs/swagger';
import { CreateMinistryDto } from './create-ministry.dto';

export class UpdateMinistryDto extends PartialType(CreateMinistryDto) {}
