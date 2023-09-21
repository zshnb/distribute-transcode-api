import { Injectable } from '@nestjs/common';
import { CreateTranscodeTaskDto } from './dto/create-transcode-task.dto';
import { UpdateTranscodeTaskDto } from './dto/update-transcode-task.dto';

@Injectable()
export class TranscodeTaskService {
  create(createTranscodeTaskDto: CreateTranscodeTaskDto) {
    return 'This action adds a new transcodeTask';
  }

  findAll() {
    return `This action returns all transcodeTask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transcodeTask`;
  }

  update(id: number, updateTranscodeTaskDto: UpdateTranscodeTaskDto) {
    return `This action updates a #${id} transcodeTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} transcodeTask`;
  }
}
