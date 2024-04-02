import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';
import { PrismaService } from 'database/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}
  async create(createScheduleDto: CreateScheduleDto) {
    const schedule = new Schedule();
    Object.assign(schedule, {
      ...createScheduleDto,
    });

    const newSchedule = await this.prisma.schedule.create({
      data: { ...schedule },
    });
    return newSchedule;
  }

  async findAll() {
    return await this.prisma.schedule.findMany();
  }

  async findOne(id: string) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      throw new NotFoundException('schedule not found');
    }

    return schedule;
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      throw new NotFoundException('schedule not found');
    }

    const updateSchedule = await this.prisma.schedule.update({
      where: { id },
      data: { ...updateScheduleDto },
    });

    return updateSchedule;
  }

  async remove(id: string) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      throw new NotFoundException('schedule not found');
    }

    await this.prisma.schedule.delete({ where: { id } });
  }
}
