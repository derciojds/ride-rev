import { Field, ID, ObjectType } from "type-graphql";
import { Comment } from "./comment-model";
import { Address } from "./address-model";

@ObjectType() 
export class User {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  password: string;

  @Field(type => Address)
  address: Address;

  @Field(type => String)
  phone: string;

  @Field(type => String)
  role: string;

  @Field(type => [Comment], {nullable: true})
  comments?: Comment[];
}