import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PgmService } from './pgm.service';
import { CreatePgmDto } from './dto/create-pgm.dto';
import { UpdatePgmDto } from './dto/update-pgm.dto';

@Controller('pgm')
export class PgmController {
  constructor(private readonly pgmService: PgmService) {}

  @Post()
  create(@Body() createPgmDto: CreatePgmDto) {
    return this.pgmService.create(createPgmDto);
  }

  @Get()
  findAll() {
    return this.pgmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pgmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePgmDto: UpdatePgmDto) {
    return this.pgmService.update(+id, updatePgmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pgmService.remove(+id);
  }
}
