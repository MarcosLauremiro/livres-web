import { Transform } from 'class-transformer';
import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';
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
  phone: string;

  @ApiProperty()
  @IsString()
  age: string;

  @ApiProperty()
  register_at: Date;

  @IsBoolean()
  @ApiProperty()
  isAdmin: boolean;

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
