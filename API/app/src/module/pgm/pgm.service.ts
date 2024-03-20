import { Injectable } from '@nestjs/common';
import { CreatePgmDto } from './dto/create-pgm.dto';
import { UpdatePgmDto } from './dto/update-pgm.dto';

@Injectable()
export class PgmService {
  create(createPgmDto: CreatePgmDto) {
    return 'This action adds a new pgm';
  }

  findAll() {
    return `This action returns all pgm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pgm`;
  }

  update(id: number, updatePgmDto: UpdatePgmDto) {
    return `This action updates a #${id} pgm`;
  }

  remove(id: number) {
    return `This action removes a #${id} pgm`;
  }
}
