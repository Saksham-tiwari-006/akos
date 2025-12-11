import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import Contact from '@/lib/models/Contact';
import { currentUser } from '@clerk/nextjs/server';
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

    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { status, responseMessage } = body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      {
        $set: {
          status,
          responseMessage,
          respondedBy: userEmail,
          updatedAt: new Date()
        }
      },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact updated successfully',
      data: contact,
    });
  } catch (error: any) {
    console.error('Error updating contact:', error);
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

    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { success: false, message: 'Invalid ID format' },
        { status: 400 }
      );
    }

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Contact deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
