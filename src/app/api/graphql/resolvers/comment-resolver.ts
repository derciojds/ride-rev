import { Mutation, Query, Resolver } from "type-graphql";
import { Comment } from "../dtos/models/comment-model";

@Resolver(Comment)
export class CommentResolver {
  private commentsCollection: Comment[] = [];
  
  @Query(() => [Comment])
  async comments(): Promise<Comment[]> {
    return await this.commentsCollection;
  }

  @Query(() => [Comment])
  async postComments(postId: string): Promise<Comment[]> {
    return await this.commentsCollection.filter(
      (comment) => comment.postId === postId
    );
  }

  @Mutation(() => Comment)
  async createComment(comment: Comment): Promise<Comment> {
    this.commentsCollection.push(comment);
    return comment;
  }
}