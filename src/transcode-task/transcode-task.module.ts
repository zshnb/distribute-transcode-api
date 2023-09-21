import { Module } from '@nestjs/common'
import { TranscodeTaskService } from './transcode-task.service'
import { TranscodeTaskController } from './transcode-task.controller'
import {
  TranscodeTask,
  TranscodeTaskSchema,
} from './entities/transcode-task.entity'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TranscodeTask.name, schema: TranscodeTaskSchema },
    ]),
  ],
  controllers: [TranscodeTaskController],
  providers: [TranscodeTaskService],
})
export class TranscodeTaskModule {}
