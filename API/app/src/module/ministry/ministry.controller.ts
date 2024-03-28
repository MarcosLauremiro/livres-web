import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MinistryService } from './ministry.service';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';

@Controller('ministry')
export class MinistryController {
  constructor(private readonly ministryService: MinistryService) {}

  @Post()
  create(@Body() createMinistryDto: CreateMinistryDto) {
    return this.ministryService.create(createMinistryDto);
  }

  @Get()
  findAll() {
    return this.ministryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ministryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMinistryDto: UpdateMinistryDto) {
    return this.ministryService.update(+id, updateMinistryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ministryService.remove(+id);
  }
}
