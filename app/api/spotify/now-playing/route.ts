import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': 'Bearer 1POdFZRZbvb...qqillRxMr2z'
      },
      next: { revalidate: 10 } // Cache for 10 seconds
    });

    if (response.status === 204) {
      return NextResponse.json({ isPlaying: false });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
} 