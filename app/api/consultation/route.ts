import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const service = formData.get('service');
    const name = formData.get('name');
    const email = formData.get('email');
    const date = formData.get('date');
    const time = formData.get('time');
    const message = formData.get('message');
    const file = formData.get('file') as File | null;

    if (!service || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const consultation = {
      service,
      name,
      email,
      date,
      time,
      message,
      file: file ? file.name : null,
      submittedAt: new Date().toISOString(),
    };

    // Save to consultations.json
    const filePath = path.join(process.cwd(), 'data', 'consultations.json');
    
    let consultations = [];
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      consultations = JSON.parse(fileContents);
    } catch (error) {
      // File doesn't exist yet, create it
    }

    consultations.push(consultation);
    await fs.writeFile(filePath, JSON.stringify(consultations, null, 2));

    // Handle file upload if present
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const uploadPath = path.join(process.cwd(), 'public', 'uploads', file.name);
      await fs.writeFile(uploadPath, buffer);
    }

    return NextResponse.json({ 
      message: 'Consultation request submitted successfully',
      consultation 
    }, { status: 201 });
  } catch (error) {
    console.error('Consultation submission error:', error);
    return NextResponse.json({ error: 'Failed to submit consultation request' }, { status: 500 });
  }
}
