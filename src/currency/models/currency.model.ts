import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Currency {
    @Field()
    base!: string;

    @Field()
    rates!: string;

    @Field()
    date!: string;
}
