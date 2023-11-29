import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromCryptocurrencies from './+state/cryptocurrencies/cryptocurrencies.reducer';
import { CryptocurrenciesEffects } from './+state/cryptocurrencies/cryptocurrencies.effects';
import { CryptocurrenciesFacade } from './+state/cryptocurrencies/cryptocurrencies.facade';
import { provideHttpClient } from '@angular/common/http';
import { API_URL } from '@app/injectables';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(CryptocurrenciesEffects),
    provideState(
      fromCryptocurrencies.CRYPTOCURRENCIES_FEATURE_KEY,
      fromCryptocurrencies.cryptocurrenciesReducer
    ),
    CryptocurrenciesFacade,
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: API_URL,
      useValue: '/rest/api'
    }
  ],
};
