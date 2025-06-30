import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/appconfig.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule),
    configObj = app.get(AppConfigService),
    appConfig = configObj.get('app'),
    { port } = appConfig;
  await app.listen(port);
}
bootstrap();
