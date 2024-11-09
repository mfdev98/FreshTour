import { NestFactory } from '@nestjs/core';
import { FreshTourBatchModule } from './fresh-tour-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(FreshTourBatchModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
