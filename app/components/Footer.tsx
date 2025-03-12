'use client';

import { useEffect, useState } from 'react';

interface SpotifyData {
  is_playing: boolean;
  item?: {
    name: string;
    artists: Array<{ name: string }>;
    external_urls: {
      spotify: string;
    };
  };
}

function NowPlaying() {
  const [songData, setSongData] = useState<SpotifyData | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            'Authorization': 'Bearer 1POdFZRZbvb...qqillRxMr2z'
          }
        });

        if (response.status === 204) {
          setSongData(null);
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        setSongData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!songData?.is_playing || !songData.item) {
    return null;
  }

  return (
    <a 
      href={songData.item.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
    >
      <svg className="h-4 w-4 text-green-500" viewBox="0 0 168 168">
        <path
          fill="currentColor"
          d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004z"
        />
      </svg>
      <span>{songData.item.name} - {songData.item.artists.map(artist => artist.name).join(', ')}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-border py-6 mt-auto">
      <div className="container flex flex-col items-center gap-2 text-sm text-muted-foreground">
        <div>Shayaan Azeem</div>
        <NowPlaying />
      </div>
    </footer>
  );
} 