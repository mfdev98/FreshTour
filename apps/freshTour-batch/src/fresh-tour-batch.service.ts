import { Injectable } from '@nestjs/common';

@Injectable()
export class FreshTourBatchService {
  getHello(): string {
    return 'Welcome to FRESH-TOUR BATCH Server!';
  }
}
