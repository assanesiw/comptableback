import { Test, TestingModule } from '@nestjs/testing';
import { SuiviService } from './suivi.service';

describe('SuiviService', () => {
  let service: SuiviService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuiviService],
    }).compile();

    service = module.get<SuiviService>(SuiviService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
