import { Test, TestingModule } from '@nestjs/testing';
import { UserDetailController } from './user-detail.controller';
import { UserDetailService } from './user-detail.service';

describe('UserDetailController', () => {
  let controller: UserDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDetailController],
      providers: [UserDetailService],
    }).compile();

    controller = module.get<UserDetailController>(UserDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
