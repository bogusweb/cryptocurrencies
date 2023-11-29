import { CryptocurrencyDTO } from '@app/domain/dto';
import { Cryptocurrency, Quotes } from '@app/domain/models';

export function createCryptocurrency(dto: CryptocurrencyDTO): Cryptocurrency {
  const quotesKeys = Object.keys(dto.quotes);
  const quotes: Quotes = {};

  quotesKeys.forEach((quote: string) => {
    const quoteDto = dto.quotes[quote];
    Object.assign(quotes, {
      [quote]: {
        ...quoteDto,
        ath_date: new Date(quoteDto.ath_date)
      }
    });
  })

  return {
    ...dto,
    last_updated: new Date(dto.last_updated),
    first_data_at: new Date(dto.first_data_at),
    quotes,
    isFavorite: false,
  }
}
