import { Field, ObjectType } from "type-graphql";
import { Author, Comment } from "./comment-model";

@ObjectType()
export class Post {
  @Field(type => String)
  id: string;
  
  @Field(type => Author)
  author: Author;

  @Field(type => String)
  title: string;

  @Field(type => String)
  content: string;

  @Field(type => Date)
  createdAt: Date;
  
  @Field(type => [Comment])
  comments: Comment[];
}