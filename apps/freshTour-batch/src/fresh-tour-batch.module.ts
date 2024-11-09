import { Module } from '@nestjs/common';
import { FreshTourBatchController } from './fresh-tour-batch.controller';
import { FreshTourBatchService } from './fresh-tour-batch.service';

@Module({
  imports: [],
  controllers: [FreshTourBatchController],
  providers: [FreshTourBatchService],
})
export class FreshTourBatchModule {}
