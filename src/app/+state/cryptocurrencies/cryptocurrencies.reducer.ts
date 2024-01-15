import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { fromCryptocurrenciesActions } from './cryptocurrencies.actions';
import { Cryptocurrency } from '@app/domain/models';

export const CRYPTOCURRENCIES_FEATURE_KEY = 'cryptocurrencies';

export type CryptocurrenciesEntityState = EntityState<Cryptocurrency>;

export interface CryptocurrenciesState {
  collection: CryptocurrenciesEntityState;
  selectedId: string | null;
  loaded: boolean;
  error: string | null;
}

export interface CryptocurrenciesPartialState {
  readonly [CRYPTOCURRENCIES_FEATURE_KEY]: CryptocurrenciesState;
}

export const cryptocurrenciesAdapter: EntityAdapter<Cryptocurrency> =
  createEntityAdapter<Cryptocurrency>({
    selectId: (crypto: Cryptocurrency) => crypto.id
  });

export const initialCryptocurrenciesState: CryptocurrenciesState = {
  collection: cryptocurrenciesAdapter.getInitialState(),
  loaded: false,
  selectedId: null,
  error: null
};

const reducer = createReducer(
  initialCryptocurrenciesState,
  on(fromCryptocurrenciesActions.getCryptocurrenciesCollection, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    fromCryptocurrenciesActions.getCryptocurrenciesCollectionSuccess, (state, { payload }) => ({
      ...state,
      loaded: true,
      collection: cryptocurrenciesAdapter.setAll(payload, state.collection)
    })
  ),
  on(
    fromCryptocurrenciesActions.toggleCryptocurrencyFavorite,
    (state: CryptocurrenciesState, { payload }) => ({
      ...state,
      collection: cryptocurrenciesAdapter.updateOne({
        id: payload.id,
        changes: {
          isFavorite: payload.value
        }
      }, state.collection)
    })
  ),
  on(
    fromCryptocurrenciesActions.setSelectedCryptocurrency,
    (state: CryptocurrenciesState, { payload }) => ({
      ...state,
      selectedId: payload.id
    })
  )
);

export function cryptocurrenciesReducer(
  state: CryptocurrenciesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
