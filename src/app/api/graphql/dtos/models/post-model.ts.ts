import { Field, ObjectType } from "type-graphql";
import { Comment } from "./comment-model";

@ObjectType()
export class Post {
  @Field(type => String)
  id: string;

  @Field(type => String)
  title: string;

  @Field(type => [Comment])
  comments: Comment[];
}