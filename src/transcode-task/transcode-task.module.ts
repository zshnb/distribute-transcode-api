import { Module } from '@nestjs/common';
import { TranscodeTaskService } from './transcode-task.service';
import { TranscodeTaskController } from './transcode-task.controller';

@Module({
  controllers: [TranscodeTaskController],
  providers: [TranscodeTaskService],
})
export class TranscodeTaskModule {}
