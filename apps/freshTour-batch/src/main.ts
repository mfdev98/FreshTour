import { NestFactory } from '@nestjs/core';
import { FreshTourBatchModule } from './fresh-tour-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(FreshTourBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
