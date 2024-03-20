import { Module } from '@nestjs/common';
import { PgmService } from './pgm.service';
import { PgmController } from './pgm.controller';

@Module({
  controllers: [PgmController],
  providers: [PgmService],
})
export class PgmModule {}
