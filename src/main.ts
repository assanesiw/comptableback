import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

const logger = new Logger('assane');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
    setHeaders: (res) => {
      res.set('Access-Control-Allow-Origin', '*');
    },
  });
  const p = 3000;
  await app.listen(p, () =>
    logger.debug('le serveur a bien demare sur le port ' + p),
  );
}
bootstrap();
