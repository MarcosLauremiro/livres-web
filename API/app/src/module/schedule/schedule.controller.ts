import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @ApiOperation({ summary: 'Criar um novo schedule' })
  @ApiResponse({ status: 201, description: 'schedule criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @ApiOperation({ summary: 'Obter todos os schedule' })
  @Get()
  findAll() {
    return this.scheduleService.findAll();
  }

  @ApiOperation({ summary: 'Obter schedule por ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar schedule por ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleService.update(id, updateScheduleDto);
  }

  @ApiOperation({ summary: 'Excluir schedule por ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(id);
  }
}
