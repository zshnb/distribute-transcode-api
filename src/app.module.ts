import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { ClsModule } from 'nestjs-cls';
import { TranscodeTaskModule } from './transcode-task/transcode-task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        'config/.env.local',
        `config/.env.${process.env.NODE_ENV}`,
        'config/.env',
      ],
      load: [configuration],
      isGlobal: true,
    }),
    ClsModule.forRoot({
      middleware: {
        mount: true,
        setup: (cls, req) => {
          cls.set('userId', req.headers['x-user-id']);
        },
      },
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongo.uri'),
      }),
      inject: [ConfigService],
    }),
    TranscodeTaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
