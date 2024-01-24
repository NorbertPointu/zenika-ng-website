import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {languageProviders} from './providers/language.provider';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), languageProviders]
};
