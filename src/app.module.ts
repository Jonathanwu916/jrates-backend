import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {CurrencyModule} from './currency/currency.module';

@Module({
    imports: [CurrencyModule, GraphQLModule.forRoot({autoSchemaFile: true})],
})
export class AppModule {}
