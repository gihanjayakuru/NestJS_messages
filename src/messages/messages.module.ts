import { Module } from '@nestjs/common';
import { MesssageController } from './messsage.controller';

@Module({
  controllers: [MesssageController],
})
export class MessagesModule {}
