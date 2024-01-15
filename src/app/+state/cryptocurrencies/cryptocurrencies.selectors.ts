import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CRYPTOCURRENCIES_FEATURE_KEY,
  CryptocurrenciesState,
  cryptocurrenciesAdapter, CryptocurrenciesEntityState,
} from './cryptocurrencies.reducer';
import { Cryptocurrency } from '@app/domain/models';

// Lookup the 'Cryptocurrencies' feature state managed by NgRx
export const selectCryptocurrenciesState =
  createFeatureSelector<CryptocurrenciesState>(CRYPTOCURRENCIES_FEATURE_KEY);

const { selectAll, selectEntities } = cryptocurrenciesAdapter.getSelectors();

export const selectCryptocurrenciesLoaded = createSelector(
  selectCryptocurrenciesState,
  (state: CryptocurrenciesState) => state.loaded
);

export const selectCryptocurrenciesError = createSelector(
  selectCryptocurrenciesState,
  (state: CryptocurrenciesState) => state.error
);

export const selectAllCryptocurrencies = createSelector(
  selectCryptocurrenciesState,
  (state: CryptocurrenciesState) => selectAll(state.collection)
);

export const selectCryptocurrenciesEntities = createSelector(
  selectCryptocurrenciesState,
  (state: CryptocurrenciesState) => selectEntities(state.collection)
);

export const selectSelectedId = createSelector(
  selectCryptocurrenciesState,
  (state: CryptocurrenciesState) => state.selectedId
);

export const selectSelectedEntity = createSelector(
  selectCryptocurrenciesEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const selectEntityById = (id: string) => createSelector(
  selectCryptocurrenciesEntities,
  (entities) => entities[id]
);
