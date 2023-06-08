import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./user-model";

@ObjectType()
class CommentAuthor {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  avatar: string;
}

@ObjectType() 
export class Comment {
  @Field(type => ID)
  id: string;

  @Field(type => ID)
  postId: string;

  @Field(type => CommentAuthor)
  author: CommentAuthor;

  @Field(type => String)
  content: string;

  @Field(type => Date)
  createdAt: Date;
}