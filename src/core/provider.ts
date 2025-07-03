import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from 'src/config/appconfig.service';

const getEnvFilePath = (): string => {
  // Default to `.env` if NODE_ENV is not set
  const environment = process.env.NODE_ENV || 'development';
  console.log(process.env.NODE_ENV, 'nodeenv');

  return environment === 'production' ? '.env.prod' : '.env';
};

const importProviders = (): any[] => {
  return [ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true })];
};
const getProviders = (): any[] => {
    return [AppConfigService];
  },
  exportProviders = (): any[] => {
    return [AppConfigService];
  };

export { importProviders, getProviders, exportProviders };
