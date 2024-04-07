import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateMinistryDto {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsString()
    leaderId: string
}
