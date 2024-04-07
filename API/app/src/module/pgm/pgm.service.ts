import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePgmDto } from './dto/create-pgm.dto';
import { UpdatePgmDto } from './dto/update-pgm.dto';
import { PrismaService } from 'database/prisma.service';
import { Pgm } from './entities/pgm.entity';

@Injectable()
export class PgmService {
  constructor(private prisma: PrismaService) {}

  async create(createPgmDto: CreatePgmDto, userId: string) {
    const pgm = new Pgm();
    Object.assign(pgm, { ...createPgmDto });

    const newPgm = await this.prisma.pGM.create({
      data: { ...pgm, leaderId: userId },
    });

    return newPgm;
  }

  async findAll() {
    const pgm = await this.prisma.pGM.findMany({
      include: {address: true}
    });
    return pgm;
  }

  async findOne(id: string) {
    const pgm = await this.prisma.pGM.findUnique({
      where: { id },
      include: {address: true, members: true}
    });

    if (!pgm) {
      throw new NotFoundException('pgm not found');
    }

    return pgm;
  }

  async update(id: string, updatePgmDto: UpdatePgmDto) {
    const pgm = await this.prisma.pGM.findUnique({
      where: { id },
    });

    if (!pgm) {
      throw new NotFoundException('pgm not found');
    }

    const updatePgm = await this.prisma.pGM.update({
      where: { id },
      data: { ...updatePgmDto },
    });

    return updatePgm;
  }

  async remove(id: string) {
    const pgm = await this.prisma.pGM.findUnique({
      where: { id },
    });

    if (!pgm) {
      throw new NotFoundException('pgm not found');
    }

    await this.prisma.pGM.delete({ where: { id } });
  }
}

