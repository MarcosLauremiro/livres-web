import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'database/prisma.service';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto, userId: string) {
    const address = new Address();
    Object.assign(address, {
      ...createAddressDto,
    });

    const newAddress = await this.prisma.address.create({
      data: { ...address, userId: userId },
    });

    return newAddress;
  }

  async findOne(id: string) {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });

    if (!address) {
      throw new NotFoundException('addres not found');
    }

    return address;
  }

  async findAll() {
    const address = await this.prisma.address.findMany();
    return address;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });

    if (!address) {
      throw new NotFoundException('addres not found');
    }

    const updateAddress = await this.prisma.address.update({
      where: { id },
      data: { ...updateAddressDto },
    });
    
    return updateAddress;
  }

  async remove(id: string) {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });

    if (!address) {
      throw new NotFoundException('addres not found');
    }

    await this.prisma.address.delete({ where: { id } });
  }
}
