import { messagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: messagesRepository;

  constructor() {
    //not for real app
    this.messagesRepo = new messagesRepository();
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
