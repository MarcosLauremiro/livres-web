import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { UserDetail } from './entities/user-detail.entity';
import { PrismaService } from 'database/prisma.service';

@Injectable()
export class UserDetailService {
  constructor(private prisma: PrismaService) {}
  async create(
    createUserDetailDto: CreateUserDetailDto,
    userId: string,
    pgmId: string,
    ministryId: string,
  ) {
    const userDetail = new UserDetail();
    Object.assign(userDetail, {
      ...createUserDetailDto,
      userId,
    });
    await this.prisma.userDetail.create({
      data: {
        ...userDetail,
        user: userId ? { connect: { id: userId } } : undefined,
        pgm: pgmId ? { connect: { id: pgmId } } : undefined,
        ministry: ministryId ? { connect: { id: ministryId } } : undefined,
      },
    });
  }

  async findAll() {
    return await this.prisma.userDetail.findMany();
  }

  findOne(id: string) {
    const userDetail = this.prisma.userDetail.findUnique({ where: { id } });

    if (!userDetail) {
      throw new NotFoundException('User not found.');
    }

    return userDetail;
  }

  async update(
    id: string,
    updateUserDetailDto: UpdateUserDetailDto,
    userId: string,
    pgmId: string,
    ministryId: string,
  ) {
    const userDetail = await this.prisma.userDetail.findUnique({
      where: { id },
    });

    if (!userDetail) {
      throw new NotFoundException('User not found.');
    }

    const updateUserDetail = await this.prisma.userDetail.update({
      where: { id },
      data: {
        ...updateUserDetailDto,
        user: userId ? { connect: { id: userId } } : undefined,
        pgm: pgmId ? { connect: { id: pgmId } } : undefined,
        ministry: ministryId ? { connect: { id: ministryId } } : undefined,
      },
    });

    return updateUserDetail;
  }

  remove(id: number) {
    return `This action removes a #${id} userDetail`;
  }
}
