import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IServiceInquiry extends Document {
  userId?: mongoose.Types.ObjectId;
  serviceName: string;
  serviceCategory: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  documents: {
    name: string;
    url: string;
    size: number;
    type: string;
    uploadedAt: Date;
  }[];
  status: 'new' | 'contacted' | 'converted' | 'closed';
  source: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo?: mongoose.Types.ObjectId;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceInquirySchema = new Schema<IServiceInquiry>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    serviceName: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
    },
    serviceCategory: {
      type: String,
      required: [true, 'Service category is required'],
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    documents: [
      {
        name: String,
        url: String,
        size: Number,
        type: String,
        uploadedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    status: {
      type: String,
      enum: ['new', 'contacted', 'converted', 'closed'],
      default: 'new',
    },
    source: {
      type: String,
      default: 'website',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ServiceInquirySchema.index({ email: 1 });
ServiceInquirySchema.index({ status: 1 });
ServiceInquirySchema.index({ serviceCategory: 1 });
ServiceInquirySchema.index({ createdAt: -1 });

const ServiceInquiry: Model<IServiceInquiry> =
  mongoose.models.ServiceInquiry || mongoose.model<IServiceInquiry>('ServiceInquiry', ServiceInquirySchema);

export default ServiceInquiry;
