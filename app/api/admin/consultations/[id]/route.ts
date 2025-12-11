import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import Consultation from '@/lib/models/Consultation';
import { currentUser } from '@clerk/nextjs/server';
import { sendEmail } from '@/lib/utils/email';
import { isValidObjectId } from '@/lib/utils/api';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userEmail = user.emailAddresses?.[0]?.emailAddress;
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@akos.com';

    if (userEmail !== adminEmail) {
      return NextResponse.json(
        { success: false, message: 'Forbidden: Admin access only' },
        { status: 403 }
      );
    }

    const { id } = await params;
    
    // Validate ObjectId format
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { status, priority, notes } = body;

    // Get current consultation before update to check status change
    const currentConsultation = await Consultation.findById(id);
    
    if (!currentConsultation) {
      return NextResponse.json(
        { success: false, message: 'Consultation not found' },
        { status: 404 }
      );
    }

    const consultation = await Consultation.findByIdAndUpdate(
      id,
      {
        $set: {
          status,
          priority,
          notes,
          updatedAt: new Date()
        }
      },
      { new: true, runValidators: true }
    );

    if (!consultation) {
      return NextResponse.json(
        { success: false, message: 'Consultation not found after update' },
        { status: 404 }
      );
    }

    // Send completion email if status changed to 'completed'
    if (status === 'completed' && currentConsultation.status !== 'completed' && consultation.email) {
      sendEmail({
        to: consultation.email,
        subject: `Your Consultation for ${consultation.service} is Complete`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb;">
            <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #3b82f6; margin: 0; font-size: 28px;">✅ Consultation Completed</h1>
              </div>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                Dear ${consultation.name},
              </p>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                Great news! Your consultation for <strong>${consultation.service}</strong> has been completed successfully.
              </p>
              
              <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">Consultation Details</h3>
                <table style="width: 100%; color: #374151; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0;"><strong>Service:</strong></td>
                    <td style="padding: 8px 0;">${consultation.service}</td>
                  </tr>
                  ${consultation.date ? `
                  <tr>
                    <td style="padding: 8px 0;"><strong>Date:</strong></td>
                    <td style="padding: 8px 0;">${consultation.date}</td>
                  </tr>
                  ` : ''}
                  ${notes ? `
                  <tr>
                    <td style="padding: 8px 0; vertical-align: top;"><strong>Notes:</strong></td>
                    <td style="padding: 8px 0;">${notes}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6;">
                If you have any questions or need further assistance, please don't hesitate to reach out to us.
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${process.env.OWNER_EMAIL || process.env.ADMIN_EMAIL || 'admin@akos.com'}" 
                   style="display: inline-block; background: #3b82f6; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                  Contact Us
                </a>
              </div>
              
              <div style="border-top: 2px solid #e5e7eb; margin-top: 30px; padding-top: 20px; text-align: center;">
                <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
                  Thank you for choosing our services!
                </p>
                <p style="color: #9ca3af; font-size: 12px; margin: 5px 0;">
                  © ${new Date().getFullYear()} AKOS. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        `
      }).catch(err => console.error('Completion email error:', err));
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation updated successfully',
      data: consultation,
    });
  } catch (error: any) {
    console.error('Error updating consultation:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const user = await currentUser();
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const userEmail = user.emailAddresses?.[0]?.emailAddress;
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@akos.com';

    if (userEmail !== adminEmail) {
      return NextResponse.json(
        { success: false, message: 'Forbidden: Admin access only' },
        { status: 403 }
      );
    }

    const { id } = await params;
    
    // Validate ObjectId format
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const consultation = await Consultation.findByIdAndDelete(id);

    if (!consultation) {
      return NextResponse.json(
        { success: false, message: 'Consultation not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Consultation deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting consultation:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
