import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDetailDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  maritalStatus: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  instagram: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  status: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  university: Boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  work: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  baptism: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  startDate: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  emergencyContact: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  detail: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  PGMId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ministryId?: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  deletedAt: Date;

  constructor(partial: Partial<CreateUserDetailDto>) {
    Object.assign(this, partial);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
