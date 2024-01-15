import { Quote } from './quotes';
import { Cryptocurrency } from './cryptocurrency';

export interface CryptocurrencyQuote extends Cryptocurrency{
  quote: Quote;
}
