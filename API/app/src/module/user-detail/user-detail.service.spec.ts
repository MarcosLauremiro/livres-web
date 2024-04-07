import { Test, TestingModule } from '@nestjs/testing';
import { UserDetailService } from './user-detail.service';

describe('UserDetailService', () => {
  let service: UserDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDetailService],
    }).compile();

    service = module.get<UserDetailService>(UserDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
