import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongodb';
import Consultation from '@/lib/models/Consultation';
import Contact from '@/lib/models/Contact';
import Review from '@/lib/models/Review';
import ServiceInquiry from '@/lib/models/ServiceInquiry';
import { currentUser } from '@clerk/nextjs/server';

export async function GET(req: NextRequest) {
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

    if (!userEmail) {
      return NextResponse.json(
        { success: false, message: 'User email not found' },
        { status: 400 }
      );
    }

    // Fetch all user submissions
    const [consultations, contacts, reviews, inquiries] = await Promise.all([
      Consultation.find({ email: userEmail })
        .sort({ createdAt: -1 })
        .select('-__v')
        .lean(),
      Contact.find({ email: userEmail })
        .sort({ createdAt: -1 })
        .select('-__v')
        .lean(),
      Review.find({ email: userEmail })
        .sort({ createdAt: -1 })
        .select('-__v')
        .lean(),
      ServiceInquiry.find({ email: userEmail })
        .sort({ createdAt: -1 })
        .select('-__v')
        .lean(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        consultations,
        contacts,
        reviews,
        inquiries,
        stats: {
          totalConsultations: consultations.length,
          totalContacts: contacts.length,
          totalReviews: reviews.length,
          totalInquiries: inquiries.length,
          pendingConsultations: consultations.filter((c: any) => c.status === 'pending').length,
          approvedReviews: reviews.filter((r: any) => r.status === 'approved').length,
        },
      },
    });
  } catch (error: any) {
    console.error('Error fetching user submissions:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
