import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsString()
  location: string;

  @IsBoolean()
  @ApiProperty()
  inscription: boolean;

  @IsBoolean()
  @ApiProperty()
  status: boolean;
}
