import { Test, TestingModule } from '@nestjs/testing';
import { MinistryController } from './ministry.controller';
import { MinistryService } from './ministry.service';

describe('MinistryController', () => {
  let controller: MinistryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinistryController],
      providers: [MinistryService],
    }).compile();

    controller = module.get<MinistryController>(MinistryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
