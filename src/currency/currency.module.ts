import {HttpModule, Module} from '@nestjs/common';
import {CurrencyService} from 'src/services/currency.service';
import {HttpRequestService} from 'src/services/http-request.service';
import {CurrencyResolver} from './currency.resolver';

@Module({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [CurrencyResolver, CurrencyService, HttpRequestService],
})
export class CurrencyModule {}
