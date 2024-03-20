import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { hashSync } from "bcryptjs";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^(\+\d{2}\s?)?\(?\d{2,3}\)?[\s.-]?\d{3,4}[\s.-]?\d{4}$/)
  phone: string;

  @ApiProperty()
  @IsString()
  date_birth: string;

  @ApiProperty()
  register_at: Date;

  @IsBoolean()
  @ApiProperty()
  isAdmin: boolean;

  @IsBoolean()
  @ApiProperty()
  marital_status: boolean

  @ApiProperty()
  @IsString()
  instagram: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Transform(({value}: {value: string}) => hashSync(value, 12), {
    groups: ['tranform']
})
  password: string;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
    this.register_at = new Date();
  }
}
