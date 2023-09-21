import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<TranscodeTask>;

@Schema({
  timestamps: true,
})
export class TranscodeTask {
  @Prop()
  id: string;
}

export const TranscodeTaskSchema = SchemaFactory.createForClass(TranscodeTask);
