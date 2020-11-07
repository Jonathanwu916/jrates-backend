import {ArgsType, Field} from '@nestjs/graphql';
import {MaxLength, MinLength} from 'class-validator';

@ArgsType()
export class ExchangeRateArgs {
    @Field(type => String)
    @MaxLength(3)
    @MinLength(3)
    base = '';

    @Field(type => String)
    @MaxLength(3)
    @MinLength(3)
    target = '';
}

@ArgsType()
export class RatesArg {
    @Field(type => String)
    @MaxLength(3)
    @MinLength(3)
    base = '';
}
