import { Injectable } from '@nestjs/common';
import { AppConfigService } from './config/appconfig.service';

@Injectable()
export class AppService {
  constructor(private readonly appConfigSvc: AppConfigService) {}
  getHello(): any {
    const { name } = this.appConfigSvc.get('cred');
    return name ? 'HELLO ' + name : 'Hello World!';
  }
}
