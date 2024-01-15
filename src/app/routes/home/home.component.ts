import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CryptocurrenciesFacade } from '../../+state/cryptocurrencies';
import { Observable } from 'rxjs';
import { Cryptocurrency } from '@app/domain/models';
import { AsyncPipe, LowerCasePipe } from "@angular/common";
import { TuiFormatNumberPipeModule, TuiSvgModule } from '@taiga-ui/core';
import { FavoriteComponent } from '@app/components/favorite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    LowerCasePipe,
    TuiFormatNumberPipeModule,
    TuiSvgModule,
    FavoriteComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  cryptocurrencies$: Observable<Cryptocurrency[]> = this.cryptocurrenciesFacade.allCryptocurrencies$;
  columns: string[] = [
    '',
    '#',
    'Name',
    'Price',
    '1h%',
    '24h%',
    '7d%',
    'Market Cap',
    'Volume (24h)',
    'Circulating Supply'
  ];

  constructor(
    private readonly cryptocurrenciesFacade: CryptocurrenciesFacade,
    private readonly router: Router
  ) {}

  toggleFavorite(crypto: Cryptocurrency, ev: MouseEvent) {
    ev.stopPropagation();
    this.cryptocurrenciesFacade.toggleCryptocurrencyFavorite(crypto);
  }

  setSelectedCryptocurrency(id: string): void {
    this.cryptocurrenciesFacade.setSelectedCryptocurrency(id);
    this.router.navigate(['/details', id]);
  }

}
