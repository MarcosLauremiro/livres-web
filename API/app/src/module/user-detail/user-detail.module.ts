import { Module } from '@nestjs/common';
import { UserDetailService } from './user-detail.service';
import { UserDetailController } from './user-detail.controller';

@Module({
  controllers: [UserDetailController],
  providers: [UserDetailService],
})
export class UserDetailModule {}
