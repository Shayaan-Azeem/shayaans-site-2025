import { NextResponse } from 'next/server';

// This is just an example - replace with your actual image data
const ALL_IMAGES = [
  { id: 1, imageUrl: '/image1.jpg', description: 'Image 1' },
  { id: 2, imageUrl: '/image2.jpg', description: 'Image 2' },
  // ... add all your images here
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const offset = parseInt(searchParams.get('offset') || '0');
  const limit = parseInt(searchParams.get('limit') || '10');

  const images = ALL_IMAGES.slice(offset, offset + limit);
  
  return NextResponse.json({ images });
} 