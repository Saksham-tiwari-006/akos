import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDocument {
  name: string;
  url: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

export interface IConsultation extends Document {
  userId?: mongoose.Types.ObjectId;
  service: string;
  serviceCategory?: string;
  name: string;
  email: string;
  phone?: string;
  date?: string;
  time?: string;
  message?: string;
  documents: IDocument[];
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  assignedTo?: mongoose.Types.ObjectId;
  notes?: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

const DocumentSchema = new Schema<IDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const ConsultationSchema = new Schema<IConsultation>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    service: {
      type: String,
      required: [true, 'Service is required'],
      trim: true,
    },
    serviceCategory: {
      type: String,
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
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    message: {
      type: String,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    documents: [DocumentSchema],
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed', 'cancelled'],
      default: 'pending',
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    notes: {
      type: String,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ConsultationSchema.index({ email: 1 });
ConsultationSchema.index({ status: 1 });
ConsultationSchema.index({ service: 1 });
ConsultationSchema.index({ createdAt: -1 });
ConsultationSchema.index({ userId: 1 });

const Consultation: Model<IConsultation> =
  mongoose.models.Consultation || mongoose.model<IConsultation>('Consultation', ConsultationSchema);

export default Consultation;
