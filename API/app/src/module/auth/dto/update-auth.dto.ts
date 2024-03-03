import { PartialType } from '@nestjs/mapped-types';
import { LoginDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(LoginDto) {}
