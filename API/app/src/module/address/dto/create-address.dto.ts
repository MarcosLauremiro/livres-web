import { IsDate, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  road: string;

  @IsString()
  neighborhood: string;

  @IsString()
  number: string;

  @IsString()
  complement: string;

  @IsString()
  userId: string;

  @IsDate()
  register_at: Date;
}
