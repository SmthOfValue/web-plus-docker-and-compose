import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: [
        'http://irr.students.nomoredomains.work',
        'https://irr.students.nomoredomains.work',
      ],
    }),
  );
  await app.listen(4000);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
}
bootstrap();
