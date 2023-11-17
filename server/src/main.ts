import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    // TODO: Pitää tutkia miten nää pipet vaikuttaa error handlingiin. D:
    new ValidationPipe({
      // Strips validated objects of properties that do not have decorators. I.e. stops random data from being sent with requests.
      whitelist: true,
    })
  );
  await app.listen(3333);
}
bootstrap();
