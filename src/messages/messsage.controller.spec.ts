import { Test, TestingModule } from '@nestjs/testing';
import { MesssageController } from './messsage.controller';

describe('MesssageController', () => {
  let controller: MesssageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MesssageController],
    }).compile();

    controller = module.get<MesssageController>(MesssageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
