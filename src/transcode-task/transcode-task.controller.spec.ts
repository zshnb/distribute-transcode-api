import { Test, TestingModule } from '@nestjs/testing'
import { TranscodeTaskController } from './transcode-task.controller'
import { TranscodeTaskService } from './transcode-task.service'

describe('TranscodeTaskController', () => {
  let controller: TranscodeTaskController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TranscodeTaskController],
      providers: [TranscodeTaskService],
    }).compile()

    controller = module.get<TranscodeTaskController>(TranscodeTaskController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
