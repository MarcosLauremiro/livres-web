import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { hashSync } from "bcryptjs";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  age: string;

  @IsString()
  register_at: Date;

  @IsString()
  @IsNotEmpty()
  @Transform(({value}: {value: string}) => hashSync(value, 12), {
    groups: ['tranform']
})
  password: string;
}
