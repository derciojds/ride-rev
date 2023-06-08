import mongoose, { Schema, Document, Types, Model } from 'mongoose';

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  avatar: string;
  password: string;
  address: Types.ObjectId;
  phone: string;
  role: string;
  postIds: string[];
}

const UserSchema = new Schema<IUser>({
  name: { 
    type: String, 
    required: [true, 'user must have a name.'] 
  },

  email: { 
    type: String,
    unique: true,
    required: [true, 'user must have a email.'] 
  },
  
  avatar: { 
    type: String, 
    default: '/assets/img/users/default-avatar.png'
  },
  
  password: {
    type: String,
    required: [true, 'user must have a password.']
  },
  
  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },

  role: {
    type: String,
    default: 'user',
    required: [true, 'user must have a role.']
  },

  phone: {
    type: String
  },

  postIds: {
    type: [String],
    default: []
  },

}, 
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// populatte the address field
UserSchema.pre<IUser>(/^find/, function(next) {
  this.populate({
    path: 'address',
    select: 'street city state zip country'
  });
  next();
});

export const UserModel: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);