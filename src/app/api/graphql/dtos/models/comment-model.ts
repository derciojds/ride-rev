import { Field, ObjectType } from "type-graphql";

@ObjectType() 
export class Comment {
  @Field(type => String)
  id: string;

  @Field(type => String)
  postId: string;

  @Field(type => String)
  userId: string;

  @Field(type => String)
  content: string;

  @Field(type => String)
  date: string;
}