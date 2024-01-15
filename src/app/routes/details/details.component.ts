import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CryptocurrenciesFacade } from '../../+state/cryptocurrencies';
import { TuiLetModule } from '@taiga-ui/cdk';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-crypto-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  imports: [
    TuiLetModule,
    AsyncPipe,
    NgIf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {

  crypto$ = inject(CryptocurrenciesFacade).selectSelectedCryptocurrency$;

  constructor(
    private readonly cryptocurrencyFacade: CryptocurrenciesFacade
  ) {}

  ngOnDestroy() {
    this.cryptocurrencyFacade.setSelectedCryptocurrency(null);
  }
}
