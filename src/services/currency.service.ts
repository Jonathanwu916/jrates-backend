import {Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpRequestService} from './http-request.service';

type Currency = {
    base: string;
    date: string;
    rates: Record<string, number>;
};

@Injectable()
export class CurrencyService {
    constructor(private readonly http: HttpRequestService) {}

    private readonly BASE_URL = 'https://api.exchangeratesapi.io';

    private getCurrencyByUrl(url: string): Observable<any> {
        return this.http.get(url).pipe(
            map((response: Currency) => ({
                ...response,
                rates: JSON.stringify(response.rates), // Work around for explicite type required from GraphQl
            })),
        );
    }

    findLatestExchangeRate(baseCurrency: string, targetCurrency: string): Observable<any> {
        return this.getCurrencyByUrl(
            this.BASE_URL + `/latest?symbols=${targetCurrency.toUpperCase()}&base=${baseCurrency.toUpperCase()}`,
        );
    }

    findLatestRatesByBaseCurrency(baseCurrency: string): Observable<any> {
        return this.getCurrencyByUrl(this.BASE_URL + `/latest?base=${baseCurrency.toUpperCase()}`);
    }
}
