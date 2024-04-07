import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';
import { PrismaService } from 'database/prisma.service';
import { Ministry } from './entities/ministry.entity';

@Injectable()
export class MinistryService {
  constructor(private prisma: PrismaService) {}

  async create(createMinistryDto: CreateMinistryDto, userId: string) {
    const ministry = new Ministry();
    Object.assign(ministry, {
      ...createMinistryDto,
    });
    await this.prisma.ministry.create({
      data: { ...ministry, leaderId: userId },
    });
  }

  async findAll() {
    return await this.prisma.ministry.findMany();
  }

  async findOne(id: string) {
    const ministry = await this.prisma.ministry.findUnique({
      where: { id },
    });

    if (!ministry) {
      throw new NotFoundException('ministry not found');
    }

    return ministry;
  }

  async update(id: string, updateMinistryDto: UpdateMinistryDto) {
    const ministry = await this.prisma.ministry.findUnique({
      where: { id },
    });

    if (!ministry) {
      throw new NotFoundException('ministry not found');
    }

    const updadeMinistry = await this.prisma.ministry.update({
      where: { id },
      data: { ...updateMinistryDto },
    });

    return updadeMinistry;
  }

  async remove(id: string) {
    const ministry = await this.prisma.ministry.findUnique({
      where: { id },
    });

    if (!ministry) {
      throw new NotFoundException('ministry not found');
    }

    await this.prisma.ministry.delete({
      where: { id },
    });
  }
}
