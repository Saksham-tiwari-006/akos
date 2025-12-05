import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, subject } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const contact = {
      name,
      email,
      phone,
      message,
      subject,
      submittedAt: new Date().toISOString(),
    };

    // Save to contacts.json
    const filePath = path.join(process.cwd(), 'data', 'contacts.json');
    
    let contacts = [];
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      contacts = JSON.parse(fileContents);
    } catch (error) {
      // File doesn't exist yet
    }

    contacts.push(contact);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

    return NextResponse.json({ 
      message: 'Contact form submitted successfully',
      contact 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}
