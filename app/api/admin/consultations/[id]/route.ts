import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import Consultation from '@/lib/models/Consultation';
import { currentUser } from '@clerk/nextjs/server';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
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

    const userEmail = user.emailAddresses[0]?.emailAddress;
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@akos.com';

    if (userEmail !== adminEmail) {
      return NextResponse.json(
        { success: false, message: 'Forbidden: Admin access only' },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { status, priority, notes } = body;

    const consultation = await Consultation.findByIdAndUpdate(
      params.id,
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
        { success: false, message: 'Consultation not found' },
        { status: 404 }
      );
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
  { params }: { params: { id: string } }
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

    const userEmail = user.emailAddresses[0]?.emailAddress;
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@akos.com';

    if (userEmail !== adminEmail) {
      return NextResponse.json(
        { success: false, message: 'Forbidden: Admin access only' },
        { status: 403 }
      );
    }

    const consultation = await Consultation.findByIdAndDelete(params.id);

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
