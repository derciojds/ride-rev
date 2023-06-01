import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Address {
  @Field(type => String)
  street: string;

  @Field(type => String)
  city: string;

  @Field(type => String)
  state: string;

  @Field(type => Number)
  zip: number;

  @Field(type => String)
  country: string;
}
