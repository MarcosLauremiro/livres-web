import { Test, TestingModule } from '@nestjs/testing';
import { PgmController } from './pgm.controller';
import { PgmService } from './pgm.service';

describe('PgmController', () => {
  let controller: PgmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PgmController],
      providers: [PgmService],
    }).compile();

    controller = module.get<PgmController>(PgmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
