import { Module } from '@nestjs/common';
import { FreshTourBatchController } from './fresh-tour-batch.controller';
import { FreshTourBatchService } from './fresh-tour-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [FreshTourBatchController],
  providers: [FreshTourBatchService],
})
export class FreshTourBatchModule {}
