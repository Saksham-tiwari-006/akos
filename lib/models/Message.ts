import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMessage extends Document {
  conversationId: string;
  senderId: string;
  senderType: 'admin' | 'user';
  senderName: string;
  senderEmail: string;
  recipientId: string;
  recipientType: 'admin' | 'user';
  subject?: string;
  message: string;
  read: boolean;
  readAt?: Date;
  attachments?: {
    name: string;
    url: string;
    type: string;
    size: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    conversationId: {
      type: String,
      required: true,
      index: true,
    },
    senderId: {
      type: String,
      required: true,
      index: true,
    },
    senderType: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
    },
    senderName: {
      type: String,
      required: true,
    },
    senderEmail: {
      type: String,
      required: true,
    },
    recipientId: {
      type: String,
      required: true,
      index: true,
    },
    recipientType: {
      type: String,
      enum: ['admin', 'user'],
      required: true,
    },
    subject: {
      type: String,
      maxlength: 200,
    },
    message: {
      type: String,
      required: true,
      maxlength: 5000,
    },
    read: {
      type: Boolean,
      default: false,
      index: true,
    },
    readAt: {
      type: Date,
    },
    attachments: [{
      name: String,
      url: String,
      type: String,
      size: Number,
    }],
  },
  {
    timestamps: true,
  }
);

// Index for conversation queries
messageSchema.index({ conversationId: 1, createdAt: -1 });
messageSchema.index({ recipientId: 1, read: 1 });

// Method to mark as read
messageSchema.methods.markAsRead = function() {
  this.read = true;
  this.readAt = new Date();
  return this.save();
};

const Message: Model<IMessage> = mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema);

export default Message;
