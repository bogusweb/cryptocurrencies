// import { NgModule } from '@angular/core';
// import { TestBed } from '@angular/core/testing';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule, Store } from '@ngrx/store';
// import { readFirst } from '@nx/angular/testing';
//
// import * as CryptocurrenciesActions from './cryptocurrencies.actions';
// import { CryptocurrenciesEffects } from './cryptocurrencies.effects';
// import { CryptocurrenciesFacade } from './cryptocurrencies.facade';
// import { CryptocurrenciesEntity } from './cryptocurrencies.models';
// import {
//   CRYPTOCURRENCIES_FEATURE_KEY,
//   CryptocurrenciesState,
//   initialCryptocurrenciesState,
//   cryptocurrenciesReducer,
// } from './cryptocurrencies.reducer';
// import * as CryptocurrenciesSelectors from './cryptocurrencies.selectors';
//
// interface TestSchema {
//   cryptocurrencies: CryptocurrenciesState;
// }
//
// describe('CryptocurrenciesFacade', () => {
//   let facade: CryptocurrenciesFacade;
//   let store: Store<TestSchema>;
//   const createCryptocurrenciesEntity = (
//     id: string,
//     name = ''
//   ): CryptocurrenciesEntity => ({
//     id,
//     name: name || `name-${id}`,
//   });
//
//   describe('used in NgModule', () => {
//     beforeEach(() => {
//       @NgModule({
//         imports: [
//           StoreModule.forFeature(
//             CRYPTOCURRENCIES_FEATURE_KEY,
//             cryptocurrenciesReducer
//           ),
//           EffectsModule.forFeature([CryptocurrenciesEffects]),
//         ],
//         providers: [CryptocurrenciesFacade],
//       })
//       class CustomFeatureModule {}
//
//       @NgModule({
//         imports: [
//           StoreModule.forRoot({}),
//           EffectsModule.forRoot([]),
//           CustomFeatureModule,
//         ],
//       })
//       class RootModule {}
//       TestBed.configureTestingModule({ imports: [RootModule] });
//
//       store = TestBed.inject(Store);
//       facade = TestBed.inject(CryptocurrenciesFacade);
//     });
//
//     /**
//      * The initially generated facade::loadAll() returns empty array
//      */
//     it('loadAll() should return empty list with loaded == true', async () => {
//       let list = await readFirst(facade.allCryptocurrencies$);
//       let isLoaded = await readFirst(facade.loaded$);
//
//       expect(list.length).toBe(0);
//       expect(isLoaded).toBe(false);
//
//       facade.init();
//
//       list = await readFirst(facade.allCryptocurrencies$);
//       isLoaded = await readFirst(facade.loaded$);
//
//       expect(list.length).toBe(0);
//       expect(isLoaded).toBe(true);
//     });
//
//     /**
//      * Use `loadCryptocurrenciesSuccess` to manually update list
//      */
//     it('allCryptocurrencies$ should return the loaded list; and loaded flag == true', async () => {
//       let list = await readFirst(facade.allCryptocurrencies$);
//       let isLoaded = await readFirst(facade.loaded$);
//
//       expect(list.length).toBe(0);
//       expect(isLoaded).toBe(false);
//
//       store.dispatch(
//         CryptocurrenciesActions.loadCryptocurrenciesSuccess({
//           cryptocurrencies: [
//             createCryptocurrenciesEntity('AAA'),
//             createCryptocurrenciesEntity('BBB'),
//           ],
//         })
//       );
//
//       list = await readFirst(facade.allCryptocurrencies$);
//       isLoaded = await readFirst(facade.loaded$);
//
//       expect(list.length).toBe(2);
//       expect(isLoaded).toBe(true);
//     });
//   });
// });
