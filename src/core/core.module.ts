import { Module, Global } from '@nestjs/common';
import { exportProviders, getProviders, importProviders } from './provider';

@Global()
@Module({
  providers: [...getProviders()],
  imports: [...importProviders()],
  exports: [...exportProviders()],
})
export class CoreModule {}
