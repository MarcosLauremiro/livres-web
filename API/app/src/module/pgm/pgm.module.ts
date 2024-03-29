import { Module } from '@nestjs/common';
import { PgmService } from './pgm.service';
import { PgmController } from './pgm.controller';
import { PrismaService } from 'database/prisma.service';

@Module({
  controllers: [PgmController],
  providers: [PgmService, PrismaService],
})
export class PgmModule {}
