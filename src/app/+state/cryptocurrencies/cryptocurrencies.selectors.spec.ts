import { CryptocurrenciesEntity } from './cryptocurrencies.models';
import {
  cryptocurrenciesAdapter,
  CryptocurrenciesPartialState,
  initialCryptocurrenciesState,
} from './cryptocurrencies.reducer';
import * as CryptocurrenciesSelectors from './cryptocurrencies.selectors';

describe('Cryptocurrencies Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCryptocurrenciesId = (it: CryptocurrenciesEntity) => it.id;
  const createCryptocurrenciesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CryptocurrenciesEntity);

  let state: CryptocurrenciesPartialState;

  beforeEach(() => {
    state = {
      cryptocurrencies: cryptocurrenciesAdapter.setAll(
        [
          createCryptocurrenciesEntity('PRODUCT-AAA'),
          createCryptocurrenciesEntity('PRODUCT-BBB'),
          createCryptocurrenciesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialCryptocurrenciesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Cryptocurrencies Selectors', () => {
    it('selectAllCryptocurrencies() should return the list of Cryptocurrencies', () => {
      const results =
        CryptocurrenciesSelectors.selectAllCryptocurrencies(state);
      const selId = getCryptocurrenciesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = CryptocurrenciesSelectors.selectEntity(
        state
      ) as CryptocurrenciesEntity;
      const selId = getCryptocurrenciesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectCryptocurrenciesLoaded() should return the current "loaded" status', () => {
      const result =
        CryptocurrenciesSelectors.selectCryptocurrenciesLoaded(state);

      expect(result).toBe(true);
    });

    it('selectCryptocurrenciesError() should return the current "error" state', () => {
      const result =
        CryptocurrenciesSelectors.selectCryptocurrenciesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
