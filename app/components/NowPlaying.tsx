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

export default function NowPlaying() {
  const [songData, setSongData] = useState<SpotifyData | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify/now-playing');
        const data = await response.json();
        setSongData(data);
      } catch (err) {
        console.error('Failed to fetch song data:', err);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!songData?.is_playing || !songData.item) {
    return (
      <div className="flex items-center text-sm text-gray-500">
        <svg className="h-4 w-4 mr-1" viewBox="0 0 168 168">
          <path
            fill="currentColor"
            d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004z"
          />
        </svg>
        <span>Not playing</span>
      </div>
    );
  }

  return (
    <div className="flex items-center text-sm">
      <svg className="h-4 w-4 text-green-500 mr-1" viewBox="0 0 168 168">
        <path
          fill="currentColor"
          d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004z"
        />
      </svg>
      <a 
        href={songData.item.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-800 transition-colors"
      >
        {songData.item.name} - {songData.item.artists.map(artist => artist.name).join(', ')}
      </a>
    </div>
  );
} 