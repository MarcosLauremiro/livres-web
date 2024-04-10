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
import { UserDetailService } from './user-detail.service';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user-detail')
export class UserDetailController {
  constructor(private readonly userDetailService: UserDetailService) {}

  @ApiOperation({ summary: 'Criar um novo user detail' })
  @Post()
  create(@Body() createUserDetailDto: CreateUserDetailDto, @Request() req) {
    const { userId, pgmId, ministryId } = req.body;
    return this.userDetailService.create(
      createUserDetailDto,
      userId,
      pgmId,
      ministryId,
    );
  }

  @ApiOperation({ summary: 'Obter todos os user detail' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.userDetailService.findAll();
  }

  @ApiOperation({ summary: 'Obter user detail por ID' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDetailService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDetailDto: UpdateUserDetailDto,
    @Request() req,
  ) {
    const { userId, pgmId, ministryId } = req.body;
    return this.userDetailService.update(
      id,
      updateUserDetailDto,
      userId,
      pgmId,
      ministryId,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDetailService.remove(id);
  }
}
