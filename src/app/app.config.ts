import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { rootReducer } from './store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideNgxMask } from 'ngx-mask';
import { provideEffects } from '@ngrx/effects';
import { LayoutEffects } from './store/layouts/layout-effect';
import { layoutReducer } from './store/layouts/layout-reducers';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader();
}

export const appConfig: ApplicationConfig = {
  
  providers: [
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: 'assets/i18n/',
        suffix: '.json'
      },
    },
   provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideStore({ layout: layoutReducer }),
    provideEffects(LayoutEffects), // Register effects
    provideNgxMask(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
        },
        defaultLanguage: 'en',
      })
    ),

  ]
};
