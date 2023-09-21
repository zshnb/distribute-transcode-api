import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';
import { ClsModule } from 'nestjs-cls';
import { TranscodeTaskModule } from './transcode-task/transcode-task.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    ClsModule.forRoot({
      middleware: {
        mount: true,
        setup: (cls, req) => {
          cls.set('userId', req.headers['x-user-id']);
        },
      },
    }),
    TranscodeTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
