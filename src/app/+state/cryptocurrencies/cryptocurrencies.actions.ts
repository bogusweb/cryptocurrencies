import { createAction, props } from '@ngrx/store';
import { ActionPayload } from '@app/domain/interfaces';
import { CryptocurrencyCollection } from '@app/domain/models/cryptocurrency-collection';

export namespace fromCryptocurrenciesActions {
  export enum Types {
    GetCryptocurrenciesCollection = '[Cryptocurrencies] Get Cryptocurrencies Collection',
    GetCryptocurrenciesCollectionSuccess = '[Cryptocurrencies] Get Cryptocurrencies Collection Success',
  }

  export const getCryptocurrenciesCollection = createAction(
    Types.GetCryptocurrenciesCollection
  );

  export const getCryptocurrenciesCollectionSuccess = createAction(
    Types.GetCryptocurrenciesCollectionSuccess,
    props<ActionPayload<CryptocurrencyCollection>>()
  );
}
