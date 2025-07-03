import { Injectable } from '@nestjs/common';
import { AppConfigService } from './config/appconfig.service';

@Injectable()
export class AppService {
  constructor(private readonly appConfigSvc: AppConfigService) {}
  getHello(): any {
    const { name, wish } = this.appConfigSvc.get('cred');
    console.log(name, wish);
    
    return name
      ? 'HELLO ' + name + `${' ' + wish}`
      : 'Hello World!' + `${' ' + wish}`;
  }
}
