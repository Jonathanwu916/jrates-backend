import {Args, Query, Resolver} from '@nestjs/graphql';
import {Observable} from 'rxjs';
import {CurrencyService} from '../services/currency.service';
import {ExchangeRateArgs, RatesArg} from './dto/currency.args';
import {Currency, CurrencyList} from './models/currency.model';

// eslint-disable-next-line
// @ts-ignore
@Resolver(of => Currency | CurrencyList)
export class CurrencyResolver {
    constructor(private readonly currencyService: CurrencyService) {}

    @Query(returns => Currency)
    rates(@Args() arg: RatesArg): Observable<Currency> {
        return this.currencyService.findLatestRatesByBaseCurrency(arg.base);
    }

    @Query(returns => Currency)
    exchangeRate(@Args() args: ExchangeRateArgs): Observable<Currency> {
        return this.currencyService.findLatestExchangeRate(args.base, args.target);
    }

    @Query(returns => CurrencyList)
    currencyList(): Observable<CurrencyList> {
        return this.currencyService.findCurrencyList();
    }
}
