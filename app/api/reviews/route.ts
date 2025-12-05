import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'reviews.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const reviews = JSON.parse(fileContents);
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, rating, message } = body;

    if (!name || !rating || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newReview = {
      name,
      rating,
      message,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
      date: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), 'data', 'reviews.json');
    
    let reviews = [];
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      reviews = JSON.parse(fileContents);
    } catch (error) {
      // File doesn't exist yet, start with empty array
    }

    reviews.unshift(newReview);
    await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 });
  }
}
