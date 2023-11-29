import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { fromCryptocurrenciesActions } from './cryptocurrencies.actions';
import { Cryptocurrency } from '@app/domain/models';

export const CRYPTOCURRENCIES_FEATURE_KEY = 'cryptocurrencies';

export interface CryptocurrenciesState
  extends EntityState<Cryptocurrency> {
  selectedId?: string;
  loaded: boolean;
  error?: string | null;
}

export interface CryptocurrenciesPartialState {
  readonly [CRYPTOCURRENCIES_FEATURE_KEY]: CryptocurrenciesState;
}

export const cryptocurrenciesAdapter: EntityAdapter<Cryptocurrency> =
  createEntityAdapter<Cryptocurrency>();

export const initialCryptocurrenciesState: CryptocurrenciesState =
  cryptocurrenciesAdapter.getInitialState({
    loaded: false,
  });

const reducer = createReducer(
  initialCryptocurrenciesState,
  on(fromCryptocurrenciesActions.getCryptocurrenciesCollection, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    fromCryptocurrenciesActions.getCryptocurrenciesCollectionSuccess,
    (state, { payload }) =>
      cryptocurrenciesAdapter.setAll(payload, {
        ...state,
        loaded: true,
      })
  )
);

export function cryptocurrenciesReducer(
  state: CryptocurrenciesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
