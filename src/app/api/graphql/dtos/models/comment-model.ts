import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Author {
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

  @Field(type => Author)
  author: Author;

  @Field(type => String)
  content: string;

  @Field(type => Date)
  createdAt: Date;
}