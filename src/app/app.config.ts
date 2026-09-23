import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // withComponentInputBinding() makes route params (e.g. :id) available as
    // ordinary input() signals on the routed component — no ActivatedRoute needed.
    provideRouter(routes, withComponentInputBinding()),
  ],
};
