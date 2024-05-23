import { Test, TestingModule } from '@nestjs/testing';
import { SuiviController } from './suivi.controller';
import { SuiviService } from './suivi.service';

describe('SuiviController', () => {
  let controller: SuiviController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuiviController],
      providers: [SuiviService],
    }).compile();

    controller = module.get<SuiviController>(SuiviController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
