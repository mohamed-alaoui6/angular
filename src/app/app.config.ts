import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClient, provideHttpClient,withFetch} from '@angular/common/http'

import { routes } from './app.routes';

import { ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(ReactiveFormsModule),provideRouter(routes), provideClientHydration(),provideHttpClient(), provideHttpClient(withFetch() )]
  
};
