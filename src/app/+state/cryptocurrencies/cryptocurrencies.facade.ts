import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CryptocurrenciesSelectors from './cryptocurrencies.selectors';
import {fromCryptocurrenciesActions} from "./cryptocurrencies.actions";
import { Cryptocurrency } from '@app/domain/models';

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
  selectSelectedCryptocurrency$ = this.store
    .pipe(select(CryptocurrenciesSelectors.selectSelectedEntity));

  getCryptocurrenciesCollection(): void {
    this.store.dispatch(fromCryptocurrenciesActions.getCryptocurrenciesCollection());
  }

  setSelectedCryptocurrency(id: string | null): void {
    this.store.dispatch(fromCryptocurrenciesActions.setSelectedCryptocurrency({
      payload: {id}
    }));
  }

  toggleCryptocurrencyFavorite(cryptocurrency: Cryptocurrency): void {
    this.store.dispatch(fromCryptocurrenciesActions.toggleCryptocurrencyFavorite({
      payload: {
        id: cryptocurrency.id,
        value: !cryptocurrency.isFavorite
      }
    }));
  }
}
