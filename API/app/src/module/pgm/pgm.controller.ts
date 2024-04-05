import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { PgmService } from './pgm.service';
import { CreatePgmDto } from './dto/create-pgm.dto';
import { UpdatePgmDto } from './dto/update-pgm.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('PGM')
@Controller('pgm')
export class PgmController {
  constructor(private readonly pgmService: PgmService) {}

  @ApiOperation({ summary: 'Criar PGM' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPgmDto: CreatePgmDto, @Request() req) {
    return this.pgmService.create(createPgmDto, req.body.userId);
  }

  @ApiOperation({ summary: 'Obter Todos os PGMs' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.pgmService.findAll();
  }

  @ApiOperation({ summary: 'Obter PGM por ID' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pgmService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar PGM por ID' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePgmDto: UpdatePgmDto) {
    return this.pgmService.update(id, updatePgmDto);
  }

  @ApiOperation({ summary: 'Deletar PGM por ID' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pgmService.remove(id);
  }
}
