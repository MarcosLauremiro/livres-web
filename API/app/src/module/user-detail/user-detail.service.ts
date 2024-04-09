import { Injectable } from '@nestjs/common';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { UserDetail } from './entities/user-detail.entity';
import { PrismaService } from 'database/prisma.service';

@Injectable()
export class UserDetailService {
  constructor(private prisma: PrismaService) {}
  async create(
    createUserDetailDto: CreateUserDetailDto, userId: string,
  ) {
    const userDetail = new UserDetail();
    Object.assign(userDetail, {
      ...createUserDetailDto, userId,
    });
    await this.prisma.userDetail.create({
      data: { ...userDetail, userId: userId},
    });
  }

  findAll() {
    return `This action returns all userDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userDetail`;
  }

  update(id: number, updateUserDetailDto: UpdateUserDetailDto) {
    return `This action updates a #${id} userDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDetail`;
  }
}
