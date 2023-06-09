import mongoose, { Document, Schema, Types } from "mongoose";

interface IPost extends Document {
  title: String;
  author: Types.ObjectId;
  content: String;
  createdAt: Date;
}

const PostSchema = new mongoose.Schema<IPost>({
  title: {
    type: String,
    required: [true, 'Post must have a title']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Post must have an author']
  },
  content: {
    type: String,
    required: [true, 'Post must have content']
  },
  createdAt: {
    type: Date,
    required: [true, 'Post must have a creation date']
  }
});

export const PostModel: mongoose.Model<IPost> = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);

