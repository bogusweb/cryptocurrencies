import { Inject, Injectable, Optional } from '@angular/core';
import { API_URL } from '@app/injectables';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetCryptocurrenciesSuccessPayload, GetCryptocurrencyPayload } from '@app/domain/payloads';
import { GetCryptocurrencySuccessPayload } from '@app/domain/payloads/get-cryptocurrency-success.payload';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrenciesDataService {
  readonly cryptocurrenciesEndpoint = 'cryptocurrencies';

  readonly endpoints = {
    getCryptocurrencies: `${this.apiUrl}/${this.cryptocurrenciesEndpoint}`,
    getCryptocurrency: (cryptocurrencyId: string): string =>
      `${this.apiUrl}/${this.cryptocurrenciesEndpoint}/${cryptocurrencyId}`
  }

  constructor(
    private readonly http: HttpClient,
    @Optional() @Inject(API_URL) private readonly apiUrl = ''
  ) {}

  getCryptocurrencies(): Observable<GetCryptocurrenciesSuccessPayload> {
    return this.http.get<GetCryptocurrenciesSuccessPayload>(this.endpoints.getCryptocurrencies);
  }

  getCryptocurrency(payload: GetCryptocurrencyPayload): Observable<GetCryptocurrencySuccessPayload> {
    return this.http.get<GetCryptocurrencySuccessPayload>(this.endpoints.getCryptocurrency(payload.cryptocurrencyId));
  }

}
