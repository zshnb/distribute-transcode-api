import { PartialType } from '@nestjs/mapped-types';
import { CreateTranscodeTaskDto } from './create-transcode-task.dto';

export class UpdateTranscodeTaskDto extends PartialType(CreateTranscodeTaskDto) {}
