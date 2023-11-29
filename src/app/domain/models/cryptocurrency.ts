import { Quotes } from '@app/domain/models/quotes';

export interface Cryptocurrency {
  id: string
  name: string
  symbol: string
  rank: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  beta_value: number
  first_data_at: Date;
  last_updated: Date;
  quotes: Quotes;
  isFavorite: boolean;
}
