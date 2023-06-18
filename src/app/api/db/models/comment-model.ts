import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface IComment extends Document {
  postId: string;
  author: Types.ObjectId;
  content: string;
  createdAt: Date;
}

const CommentSchema = new mongoose.Schema<IComment>({
  postId: {
    type: String,
    required: [true, 'comment must belong to a post.']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'comment must have an author.']
  }, 
  content: {
    type: String,
    required: [true, 'comment must have content.']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
}, 
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})

export const CommentModel: Model<IComment> = mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);