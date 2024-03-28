import { Injectable } from '@nestjs/common';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';

@Injectable()
export class MinistryService {
  create(createMinistryDto: CreateMinistryDto) {
    return 'This action adds a new ministry';
  }

  findAll() {
    return `This action returns all ministry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ministry`;
  }

  update(id: number, updateMinistryDto: UpdateMinistryDto) {
    return `This action updates a #${id} ministry`;
  }

  remove(id: number) {
    return `This action removes a #${id} ministry`;
  }
}
