import { Field, ID, ObjectType } from "type-graphql";
import { Comment } from "./comment-model";

@ObjectType()
export class Address {
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


@ObjectType() 
export class User {
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

  @Field(type => Address, {nullable: true})
  address?: Address;

  @Field(type => String)
  phone: string;

  @Field(type => String)
  role: string;

  @Field(type => [Comment], {nullable: true})
  comments?: Comment[];

  @Field(type => [String], {nullable: true})
  postIds?: string[] 
}