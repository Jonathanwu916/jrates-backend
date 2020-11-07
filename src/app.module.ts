import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {CurrencyService} from './services/currency.service';
import {HttpRequestService} from './services/http-request.service';

@Module({
    imports: [GraphQLModule.forRoot({autoSchemaFile: true})],
    providers: [CurrencyService, HttpRequestService],
})
export class AppModule {}
