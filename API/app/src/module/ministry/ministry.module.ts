import { Module } from '@nestjs/common';
import { MinistryService } from './ministry.service';
import { MinistryController } from './ministry.controller';

@Module({
  controllers: [MinistryController],
  providers: [MinistryService],
})
export class MinistryModule {}
