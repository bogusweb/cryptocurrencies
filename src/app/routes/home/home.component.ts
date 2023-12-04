import { Component, inject } from '@angular/core';
import { CryptocurrenciesFacade } from '../../+state/cryptocurrencies';
import { Observable } from 'rxjs';
import { Cryptocurrency } from '@app/domain/models';
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe
  ]
})
export class HomeComponent {
  cryptocurrencies$: Observable<Cryptocurrency[]> = inject(CryptocurrenciesFacade).allCryptocurrencies$;
}
