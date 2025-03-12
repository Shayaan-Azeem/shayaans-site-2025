'use client';

import { useEffect, useState } from 'react';

interface Image {
  id: number;
  imageUrl: string;
  description: string;
}

export default function ImageGallery() {
  const [items, setItems] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const fetchImages = async (start: number) => {
    try {
      const response = await fetch(`/api/images?offset=${start}&limit=10`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      
      // If we've seen the first image again, we've completed the cycle
      if (start > 0 && data.images.some((img: Image) => img.id === items[0]?.id)) {
        setHasCompletedCycle(true);
        return [];
      }
      
      return data.images;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  const loadMore = async () => {
    if (isLoading || hasCompletedCycle) return;
    
    setIsLoading(true);
    const newImages = await fetchImages(startIndex);
    
    if (newImages.length > 0) {
      setItems(prev => [...prev, ...newImages]);
      setStartIndex(prev => prev + newImages.length);
    } else {
      setHasCompletedCycle(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-[2rem] overflow-hidden transform transition-all hover:scale-[1.02] aspect-square"
          >
            <img 
              src={item.imageUrl} 
              alt={item.description} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {isLoading && (
        <div className="text-center py-4">
          Loading...
        </div>
      )}
      
      {hasCompletedCycle && (
        <div className="text-center py-4 text-gray-600">
          All photos have been displayed
        </div>
      )}
      
      {!hasCompletedCycle && !isLoading && (
        <button 
          onClick={loadMore}
          className="w-full py-4 text-center text-blue-500 hover:text-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
} 