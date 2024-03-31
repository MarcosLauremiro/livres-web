import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'database/prisma.service';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto) {
    const event = new Event();
    Object.assign(event, { ...createEventDto });

    await this.prisma.event.create({
      data: { ...event },
    });

    return event;
  }

  async findAll() {
    return await this.prisma.event.findMany({
      include: { address: true },
    });
  }

  async findOne(id: string) {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: { address: true },
    });

    if (!event) {
      throw new NotFoundException('User not found.');
    }

    return event;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const event = await this.prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      throw new NotFoundException('User not found.');
    }

    const updateEvent = await this.prisma.user.update({
      where: { id },
      data: { ...updateEventDto },
    });
  }

  async remove(id: string) {
    const event = await this.prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      throw new NotFoundException('User not found.');
    }

    await this.prisma.event.delete({
      where: { id },
    });
  }
}
