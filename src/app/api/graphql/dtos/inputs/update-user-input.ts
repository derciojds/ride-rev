import { Field, ID, InputType } from "type-graphql";
import { AddressInput } from "./create-user-input";

@InputType()
export class UpdateUserInput {
  @Field(type => ID, {nullable: true})
  id?: string;
  
  @Field(type => String, {nullable: true})
  name?: string;

  @Field(type => String, {nullable: true})
  email?: string;

  @Field(type => String, {nullable: true})
  avatar?: string;

  @Field(type => String, {nullable: true})
  password?: string;

  @Field(type => AddressInput, {nullable: true})
  address?: AddressInput;

  @Field(type => String, {nullable: true})
  phone?: string;

  @Field(type => String, {nullable: true})
  role?: string;

  @Field(type => [String], {nullable: true})
  postIds?: string[];
}