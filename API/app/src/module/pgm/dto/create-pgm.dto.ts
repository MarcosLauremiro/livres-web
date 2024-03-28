import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePgmDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    time: string;

    @ApiProperty()
    @IsString()
    location: string;

    @ApiProperty()
    @IsString()
    userId: string;
}
