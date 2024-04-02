import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateScheduleDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  hour: string;

  @ApiProperty()
  @IsString()
  localization: string;

  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsString()
  target_audience: string;
}
