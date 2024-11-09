import { Test, TestingModule } from '@nestjs/testing';
import { FreshTourBatchController } from './fresh-tour-batch.controller';
import { FreshTourBatchService } from './fresh-tour-batch.service';

describe('FreshTourBatchController', () => {
  let freshTourBatchController: FreshTourBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FreshTourBatchController],
      providers: [FreshTourBatchService],
    }).compile();

    freshTourBatchController = app.get<FreshTourBatchController>(FreshTourBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(freshTourBatchController.getHello()).toBe('Hello World!');
    });
  });
});
