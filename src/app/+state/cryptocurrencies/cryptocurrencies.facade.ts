import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CryptocurrenciesSelectors from './cryptocurrencies.selectors';
import {fromCryptocurrenciesActions} from "./cryptocurrencies.actions";

@Injectable()
export class CryptocurrenciesFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(CryptocurrenciesSelectors.selectCryptocurrenciesLoaded)
  );
  allCryptocurrencies$ = this.store.pipe(
    select(CryptocurrenciesSelectors.selectAllCryptocurrencies)
  );
  selectedCryptocurrencies$ = this.store.pipe(
    select(CryptocurrenciesSelectors.selectEntity)
  );

  getCryptocurrenciesCollection(): void {
    this.store.dispatch(fromCryptocurrenciesActions.getCryptocurrenciesCollection());
  }

  toggleCryptocurrencyFavorite(id: string): void {
    this.store.dispatch(fromCryptocurrenciesActions.toggleCryptocurrencyFavorite({payload: { id }}));
  }
}
