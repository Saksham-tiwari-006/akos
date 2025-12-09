import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAnalytics extends Document {
  type: 'page_view' | 'service_inquiry' | 'consultation' | 'contact' | 'review';
  page?: string;
  service?: string;
  userId?: mongoose.Types.ObjectId;
  sessionId?: string;
  ipAddress?: string;
  userAgent?: string;
  referrer?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>(
  {
    type: {
      type: String,
      required: true,
      enum: ['page_view', 'service_inquiry', 'consultation', 'contact', 'review'],
    },
    page: {
      type: String,
    },
    service: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    sessionId: {
      type: String,
    },
    ipAddress: {
      type: String,
    },
    userAgent: {
      type: String,
    },
    referrer: {
      type: String,
    },
    metadata: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

// Indexes for analytics queries
AnalyticsSchema.index({ type: 1, createdAt: -1 });
AnalyticsSchema.index({ userId: 1, createdAt: -1 });
AnalyticsSchema.index({ service: 1, type: 1 });

const Analytics: Model<IAnalytics> =
  mongoose.models.Analytics || mongoose.model<IAnalytics>('Analytics', AnalyticsSchema);

export default Analytics;
