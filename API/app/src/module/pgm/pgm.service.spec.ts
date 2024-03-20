import { Test, TestingModule } from '@nestjs/testing';
import { PgmService } from './pgm.service';

describe('PgmService', () => {
  let service: PgmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PgmService],
    }).compile();

    service = module.get<PgmService>(PgmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
