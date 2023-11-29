import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fromCryptocurrenciesActions } from './cryptocurrencies.actions';
import { CryptocurrenciesDataService } from '@app/services';
import { GetCryptocurrenciesSuccessPayload } from '@app/domain/payloads';
import { map } from 'rxjs/operators';
import { createCryptocurrency } from '@app/domain/adapters';
import { CryptocurrencyCollection } from '@app/domain/models/cryptocurrency-collection';
import { fetch } from '@nx/angular';

@Injectable()
export class CryptocurrenciesEffects {

  getCryptocurrenciesCollection$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromCryptocurrenciesActions.getCryptocurrenciesCollection),
      fetch({
        run: () => {
          return this.cryptocurrenciesDataService.getCryptocurrencies().pipe(
            map((data: GetCryptocurrenciesSuccessPayload) => data.map(createCryptocurrency)),
            map((data: CryptocurrencyCollection) => {
              return fromCryptocurrenciesActions.getCryptocurrenciesCollectionSuccess({
                payload: data
              })
            })
          )
        }
      })
    )
  );

  constructor(
    private readonly action$: Actions,
    private readonly cryptocurrenciesDataService: CryptocurrenciesDataService
  ) {}
}
