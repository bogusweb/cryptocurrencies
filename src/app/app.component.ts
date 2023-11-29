import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CryptocurrenciesFacade } from './+state/cryptocurrencies';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'cryptocurrency-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cryptocurrency';

  constructor(
    private readonly cryptoCurrenciesFacade: CryptocurrenciesFacade
  ) {}

  ngOnInit() {
    this.cryptoCurrenciesFacade.getCryptocurrenciesCollection();
  }


}
