import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MinistryService } from './ministry.service';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Ministry')
@Controller('ministry')
export class MinistryController {
  constructor(private readonly ministryService: MinistryService) {}

  @ApiOperation({ summary: 'Criar um novo ministerio' })
  @ApiResponse({ status: 201, description: 'ministerio criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Requisição inválida' })
  @Post()
  create(@Body() createMinistryDto: CreateMinistryDto, @Request() req) {
    return this.ministryService.create(createMinistryDto, req.body.userId);
  }

  @ApiOperation({ summary: 'Obter todos os ministerios' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.ministryService.findAll();
  }

  @ApiOperation({ summary: 'Obter ministerio por ID' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ministryService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar ministerio por ID' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMinistryDto: UpdateMinistryDto,
  ) {
    return this.ministryService.update(id, updateMinistryDto);
  }

  @ApiOperation({ summary: 'Deletar ministerio por ID' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ministryService.remove(id);
  }
}
