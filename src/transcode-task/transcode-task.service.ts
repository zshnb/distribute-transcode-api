import { Injectable } from '@nestjs/common'
import { UpdateTranscodeTaskDto } from './dto/update-transcode-task.dto'
import { Model } from 'mongoose'
import { TranscodeTask } from './entities/transcode-task.entity'
import { newTaskId } from 'src/util/idUtil'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class TranscodeTaskService {
  constructor(
    @InjectModel(TranscodeTask.name)
    private transcodeModel: Model<TranscodeTask>,
  ) {}

  async create() {
    const transcodeTask = new this.transcodeModel({
      id: newTaskId(),
    })
    await transcodeTask.save()
    return transcodeTask.id
  }

  findAll() {
    return `This action returns all transcodeTask`
  }

  findOne(id: number) {
    return `This action returns a #${id} transcodeTask`
  }

  update(id: number, updateTranscodeTaskDto: UpdateTranscodeTaskDto) {
    return `This action updates a #${id} transcodeTask`
  }

  remove(id: number) {
    return `This action removes a #${id} transcodeTask`
  }
}
