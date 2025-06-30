export class AppConfigService {
  private readonly envConfig: { [key: string]: any } = {};
  constructor() {
    this.envConfig.app = {
      port: parseInt(process.env.PORT, 10) || 8080,
    };

    this.envConfig.cred = {
      name: process.env.NAME,
    };
  }

  get = (key: string) => {
    return this.envConfig[key];
  };
}
