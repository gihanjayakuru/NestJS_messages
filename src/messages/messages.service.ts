import { Injectable } from '@nestjs/common';
import { messagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  //   messagesRepo: messagesRepository;

  constructor(public messagesRepo: messagesRepository) {
    // this.messagesRepo = new messagesRepository();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
