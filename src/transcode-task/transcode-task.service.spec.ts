import { Test, TestingModule } from '@nestjs/testing';
import { TranscodeTaskService } from './transcode-task.service';

describe('TranscodeTaskService', () => {
  let service: TranscodeTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranscodeTaskService],
    }).compile();

    service = module.get<TranscodeTaskService>(TranscodeTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
