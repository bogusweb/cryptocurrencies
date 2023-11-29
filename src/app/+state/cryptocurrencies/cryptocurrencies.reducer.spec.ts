import { Action } from '@ngrx/store';

import * as CryptocurrenciesActions from './cryptocurrencies.actions';
import { CryptocurrenciesEntity } from './cryptocurrencies.models';
import {
  CryptocurrenciesState,
  initialCryptocurrenciesState,
  cryptocurrenciesReducer,
} from './cryptocurrencies.reducer';

describe('Cryptocurrencies Reducer', () => {
  const createCryptocurrenciesEntity = (
    id: string,
    name = ''
  ): CryptocurrenciesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Cryptocurrencies actions', () => {
    it('loadCryptocurrenciesSuccess should return the list of known Cryptocurrencies', () => {
      const cryptocurrencies = [
        createCryptocurrenciesEntity('PRODUCT-AAA'),
        createCryptocurrenciesEntity('PRODUCT-zzz'),
      ];
      const action = CryptocurrenciesActions.loadCryptocurrenciesSuccess({
        cryptocurrencies,
      });

      const result: CryptocurrenciesState = cryptocurrenciesReducer(
        initialCryptocurrenciesState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = cryptocurrenciesReducer(
        initialCryptocurrenciesState,
        action
      );

      expect(result).toBe(initialCryptocurrenciesState);
    });
  });
});
