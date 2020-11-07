import {NotFoundException} from '@nestjs/common';
import {Args, Query, Resolver} from '@nestjs/graphql';
import {Observable} from 'rxjs';
import {CurrencyService} from '../service/currency.service';
import {ExchangeRateArgs, RatesArg} from './dto/currency.args';
import {Currency} from './models/currency.model';

// eslint-disable-next-line
// @ts-ignore
@Resolver(of => Currency)
export class CurrencyResolver {
    constructor(private readonly currencyService: CurrencyService) {}

    @Query(returns => Currency)
    rates(@Args() arg: RatesArg): Observable<Currency> {
        return this.currencyService.findLatestRatesByBaseCurrency(arg.base);
        // if (!rates) {
        //     throw new NotFoundException(base);
        // }
        // return rates;
    }

    @Query(returns => Currency)
    exchangeRate(@Args() args: ExchangeRateArgs): Observable<Currency> {
        return this.currencyService.findLatestExchangeRate(args.base, args.target);
        // if (!rates) {
        //     throw new NotFoundException(base);
        // }
        // return rates;
    }
}
