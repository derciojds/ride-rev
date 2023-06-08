import { Field, ID, InputType } from "type-graphql";

@InputType() 
export class CommentInput {
  @Field(type => ID)
  id: string;

  @Field(type => ID)
  postId: string;

  @Field(type => String)
  authorId: string;

  @Field(type => String)
  content: string;
}