import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CryptocurrenciesFacade } from './+state/cryptocurrencies';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, TuiRootModule, TuiDialogModule, TuiAlertModule],
  selector: 'cryptocurrency-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
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
