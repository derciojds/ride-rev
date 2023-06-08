import { Field, ID, InputType } from "type-graphql";

@InputType()
export class AddressInput {
  @Field(type => String)
  street: string;

  @Field(type => String)
  city: string;

  @Field(type => String)
  state: string;

  @Field(type => String)
  zip: string;

  @Field(type => String)
  country: string;
}

@InputType()
export class CreateUserInput {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  avatar: string;

  @Field(type => String)
  password: string;

  @Field(type => AddressInput)
  address: AddressInput;

  @Field(type => String)
  phone: string;

  @Field(type => String)
  role: string;

  @Field(type => [String], {nullable: true})
  postIds?: string[];
}