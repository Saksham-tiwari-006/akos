import { NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.serviceName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create data directory if it doesn't exist
    const dataDir = join(process.cwd(), 'data');
    try {
      await mkdir(dataDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    const filePath = join(dataDir, 'service-inquiries.json');
    
    // Read existing inquiries or create new array
    let inquiries = [];
    try {
      const fileContent = await readFile(filePath, 'utf-8');
      inquiries = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }

    // Add new inquiry with timestamp
    const newInquiry = {
      ...data,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    };
    
    inquiries.push(newInquiry);

    // Write updated inquiries to file
    await writeFile(filePath, JSON.stringify(inquiries, null, 2));

    return NextResponse.json({ 
      success: true,
      message: 'Service inquiry submitted successfully',
      inquiryId: newInquiry.id
    });
  } catch (error) {
    console.error('Service inquiry submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit service inquiry' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'data', 'service-inquiries.json');
    const fileContent = await readFile(filePath, 'utf-8');
    const inquiries = JSON.parse(fileContent);
    
    return NextResponse.json(inquiries);
  } catch (error) {
    return NextResponse.json([]);
  }
}
