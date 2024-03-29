import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TUI_NUMBER_FORMAT
} from "@taiga-ui/core";
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptocurrenciesFacade } from './+state/cryptocurrencies';

@Component({
  standalone: true,
  imports: [RouterModule, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule],
  selector: 'cryptocurrency-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
    {
      provide: TUI_NUMBER_FORMAT,
      useValue: {
        decimalLimit: 2,
        decimalSeparator: '.'
      }
    }
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private readonly cryptoCurrenciesFacade: CryptocurrenciesFacade
  ) {}

  ngOnInit() {
    this.cryptoCurrenciesFacade.getCryptocurrenciesCollection();
  }
}
