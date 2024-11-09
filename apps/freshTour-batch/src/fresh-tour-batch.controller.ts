import { Controller, Get } from '@nestjs/common';
import { FreshTourBatchService } from './fresh-tour-batch.service';

@Controller()
export class FreshTourBatchController {
  constructor(private readonly freshTourBatchService: FreshTourBatchService) {}

  @Get()
  getHello(): string {
    return this.freshTourBatchService.getHello();
  }
}
