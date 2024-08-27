import { Module } from '@nestjs/common';
import { MesssageController } from './messsage.controller';
import { MessagesService } from './messages.service';
import { messagesRepository } from './messages.repository';

@Module({
  controllers: [MesssageController],

  //providers mean -> things that can be used as dependencies for other classes
  providers: [MessagesService, messagesRepository],
})
export class MessagesModule {}
