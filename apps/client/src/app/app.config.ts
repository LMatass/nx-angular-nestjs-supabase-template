import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '@nx-angular-nest-template/auth-client';

export const appConfig: ApplicationConfig = {
        providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation()), provideHttpClient(withInterceptors([authInterceptor]))],
};
