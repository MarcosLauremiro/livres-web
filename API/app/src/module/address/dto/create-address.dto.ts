import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  road: string;

  @ApiProperty()
  @IsString()
  neighborhood: string;

  @ApiProperty()
  @IsString()
  number: string;

  @ApiProperty()
  @IsString()
  complement: string;

  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  register_at: Date;

  constructor(partial: Partial<CreateAddressDto>) {
    Object.assign(this, partial);
    this.register_at = new Date();
  }
}
