import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPricing {
  basic?: number;
  standard?: number;
  premium?: number;
  custom?: boolean;
}

export interface IService extends Document {
  name: string;
  slug: string;
  category: string;
  description: string;
  longDescription?: string;
  duration?: string;
  pricing?: IPricing;
  features: string[];
  requirements: string[];
  benefits: string[];
  icon?: string;
  image?: string;
  status: 'active' | 'inactive';
  popular: boolean;
  featured: boolean;
  order: number;
  tags: string[];
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    name: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    longDescription: {
      type: String,
    },
    duration: {
      type: String,
    },
    pricing: {
      basic: Number,
      standard: Number,
      premium: Number,
      custom: {
        type: Boolean,
        default: false,
      },
    },
    features: [
      {
        type: String,
      },
    ],
    requirements: [
      {
        type: String,
      },
    ],
    benefits: [
      {
        type: String,
      },
    ],
    icon: {
      type: String,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    popular: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ServiceSchema.index({ slug: 1 });
ServiceSchema.index({ category: 1, status: 1 });
ServiceSchema.index({ status: 1, popular: 1, featured: 1 });
ServiceSchema.index({ tags: 1 });

const Service: Model<IService> =
  mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
