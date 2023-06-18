import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Comment } from "../dtos/models/comment-model";
import { CommentInput } from "../dtos/inputs/comment-input";
import { CommentModel } from "../../db/models/comment-model";
import { UserResolver } from "./user-resolver";

@Resolver(Comment)
export class CommentResolver {
  // @Query(() => [Comment])
  // async comments(): Promise<Comment[]> {
  //   const comments: Comment[] = await CommentModel.find().populate('author');

  //   return comments;
  // }

  @Query(() => [Comment])
  async comments(@Arg('postId', () => String) postId: String) {
    const comments: Comment[] = await CommentModel.find({ postId: postId });
    return comments;
  }

  @Mutation(() => Comment)
  async createComment(@Arg('data', () => CommentInput) data: CommentInput): Promise<Comment> {
    const author = new UserResolver().user(data.authorId)

    const createdComment = await CommentModel.create({
      postId: data.postId,
      author: (await author).id,
      content: data.content
    });
    
    const comment: Comment | null	 = await CommentModel.findById(createdComment?._id).populate('author');

    if (!comment) { 
      throw new Error('Comment not found');
    }

    return comment;
  }
}