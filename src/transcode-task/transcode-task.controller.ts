import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TranscodeTaskService } from './transcode-task.service';
import { UpdateTranscodeTaskDto } from './dto/update-transcode-task.dto';

@Controller('api/transcode-task')
export class TranscodeTaskController {
  constructor(private readonly transcodeTaskService: TranscodeTaskService) {}

  @Post()
  async create() {
    const id = await this.transcodeTaskService.create();
    return { data: id };
  }

  @Get()
  findAll() {
    return this.transcodeTaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transcodeTaskService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTranscodeTaskDto: UpdateTranscodeTaskDto,
  ) {
    return this.transcodeTaskService.update(+id, updateTranscodeTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transcodeTaskService.remove(+id);
  }
}
