import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule } from "@taiga-ui/core";
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptocurrenciesFacade } from './+state/cryptocurrencies';

@Component({
  standalone: true,
  imports: [RouterModule, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule],
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
