import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IReview extends Document {
  userId?: mongoose.Types.ObjectId;
  name: string;
  email?: string;
  rating: number;
  message: string;
  avatar?: string;
  service?: string;
  status: 'pending' | 'approved' | 'rejected';
  isVerified: boolean;
  helpful: number;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
    },
    message: {
      type: String,
      required: [true, 'Review message is required'],
      maxlength: [1000, 'Review cannot exceed 1000 characters'],
    },
    avatar: {
      type: String,
    },
    service: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    helpful: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ReviewSchema.index({ status: 1, createdAt: -1 });
ReviewSchema.index({ rating: 1 });
ReviewSchema.index({ userId: 1 });

const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
