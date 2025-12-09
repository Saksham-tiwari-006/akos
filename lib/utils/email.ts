import nodemailer from 'nodemailer';
import { EMAIL_CONFIG } from '../config';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: EMAIL_CONFIG.host,
  port: EMAIL_CONFIG.port,
  secure: EMAIL_CONFIG.secure,
  auth: EMAIL_CONFIG.auth.user && EMAIL_CONFIG.auth.pass ? EMAIL_CONFIG.auth : undefined,
});

// Verify transporter configuration
export async function verifyEmailConfig() {
  try {
    await transporter.verify();
    console.log('✅ Email service is ready');
    return true;
  } catch (error) {
    console.error('❌ Email service error:', error);
    return false;
  }
}

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  attachments?: any[];
}

// Send email function
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const mailOptions = {
      from: `${EMAIL_CONFIG.from.name} <${EMAIL_CONFIG.from.email}>`,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      attachments: options.attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Email templates
export const emailTemplates = {
  // Welcome email
  welcome: (name: string) => ({
    subject: 'Welcome to AKOS Services',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Welcome to AKOS!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for choosing AKOS for your taxation and accounting needs.</p>
        <p>We're here to help you with all your business registration, compliance, and financial services.</p>
        <p>If you have any questions, feel free to reach out to us.</p>
        <br>
        <p>Best regards,<br>AKOS Team</p>
      </div>
    `,
  }),

  // Consultation confirmation
  consultationConfirmation: (data: { name: string; service: string; date?: string; time?: string }) => ({
    subject: 'Consultation Request Received',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Consultation Request Confirmed</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your consultation request for <strong>${data.service}</strong>.</p>
        ${data.date && data.time ? `<p>Scheduled for: <strong>${data.date} at ${data.time}</strong></p>` : ''}
        <p>Our team will review your request and get back to you within 24 hours.</p>
        <br>
        <p>Best regards,<br>AKOS Team</p>
      </div>
    `,
  }),

  // Contact form acknowledgment
  contactAcknowledgment: (name: string) => ({
    subject: 'We Received Your Message',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Thank You for Contacting Us</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will respond to you as soon as possible.</p>
        <p>Our typical response time is within 24 hours during business days.</p>
        <br>
        <p>Best regards,<br>AKOS Team</p>
      </div>
    `,
  }),

  // Service inquiry notification (to admin)
  serviceInquiryNotification: (data: { name: string; email: string; service: string; message?: string }) => ({
    subject: `New Service Inquiry: ${data.service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">New Service Inquiry</h2>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.message ? `<p><strong>Message:</strong></p><p>${data.message}</p>` : ''}
        <br>
        <p>Please respond to this inquiry promptly.</p>
      </div>
    `,
  }),

  // Status update notification
  statusUpdate: (data: { name: string; service: string; status: string }) => ({
    subject: `Status Update: ${data.service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">Service Status Update</h2>
        <p>Dear ${data.name},</p>
        <p>The status of your service request for <strong>${data.service}</strong> has been updated to:</p>
        <p style="font-size: 18px; font-weight: bold; color: #3b82f6;">${data.status.toUpperCase()}</p>
        <p>You can check your dashboard for more details.</p>
        <br>
        <p>Best regards,<br>AKOS Team</p>
      </div>
    `,
  }),
};

// Helper functions to send specific emails
export async function sendWelcomeEmail(email: string, name: string) {
  const template = emailTemplates.welcome(name);
  return sendEmail({ to: email, ...template });
}

export async function sendConsultationConfirmation(
  email: string,
  data: { name: string; service: string; date?: string; time?: string }
) {
  const template = emailTemplates.consultationConfirmation(data);
  return sendEmail({ to: email, ...template });
}

export async function sendContactAcknowledgment(email: string, name: string) {
  const template = emailTemplates.contactAcknowledgment(name);
  return sendEmail({ to: email, ...template });
}

export async function sendServiceInquiryNotification(
  adminEmail: string,
  data: { name: string; email: string; service: string; message?: string }
) {
  const template = emailTemplates.serviceInquiryNotification(data);
  return sendEmail({ to: adminEmail, ...template });
}

export async function sendStatusUpdate(
  email: string,
  data: { name: string; service: string; status: string }
) {
  const template = emailTemplates.statusUpdate(data);
  return sendEmail({ to: email, ...template });
}
