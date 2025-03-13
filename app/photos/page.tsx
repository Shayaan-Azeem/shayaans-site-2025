"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface Photo {
  id: string;
  title?: string;
  location: string;
  image: string;
  category: 'polaroids' | 'film' | 'disposable';
  songUrl?: string;
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="animate-pulse">Loading...</div>
    </div>
  );
}

// Main page component
export default function PhotosPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PhotosPageContent />
    </Suspense>
  );
}

// Content component that uses client-side hooks
function PhotosPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  // Set initial tab based on URL parameter or default to 'Polaroids'
  const [activeTab, setActiveTab] = useState<'Polaroids' | 'Film' | 'Disposable'>(
    (tabParam as 'Polaroids' | 'Film' | 'Disposable') || 'Polaroids'
  );
  
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Polaroid photos
  const polaroidPhotos: Photo[] = [
    {
      id: "1",
      title: "the start of something big",
      location: "WeWork Toronto",
      image: "/polaroids/the start of something big.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/1zgHn1EqUyA0HqNYMdJ5ia?si=b10022a78daa4fa1"
    },
    {
      id: "2",
      title: "apocalypse w/ greg",
      location: "Shopify Toronto",
      image: "/polaroids/apogreg.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/0mEdbdeRFQwBhN4xfyIeUM?si=e6bb613c681245fd"
    },
    {
      id: "3",
      title: "lost in toronto",
      location: "Toronto, ON",
      image: "/polaroids/lost in toronto.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/5kDgJffgJ0lYHTSiaXFWNw?si=590001762a2840ce"
    },
    {
      id: "4",
      title: "the one where ayaan turns five",
      location: "Jersey City, NJ",
      image: "/polaroids/ayaanturns5.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/4I4aQGNJ2HufloNtB65nxR?si=c579a5e4bb6042c2"
    },
    {
      id: "5",
      title: "airplane thoughts",
      location: "Above Michigan",
      image: "/polaroids/airplanethoughts.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/19nu3H3vjeZ505i450lz8R?si=424f25c49b9f4b30"
    },
    {
      id: "6",
      title: "break things build better",
      location: "Shopify Toronto",
      image: "/polaroids/breakbuildbetter.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/1oAwsWBovWRIp7qLMGPIet?si=d9e5bb4900954ea5"
    },
    {
      id: "7",
      title: "water water water loo loo loo",
      location: "Waterloo, ON",
      image: "/polaroids/water water water.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/1WaqQIJ0iENGWZ1QmYvYNK?si=2c7ace1c075042e"
    },
    {
      id: "8",
      title: "me and my favourite future nobel physicist",
      location: "Oakville, ON",
      image: "/polaroids/nobel physic.PNG",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/7kv7zBjMtVf0eIJle2VZxn?si=997f5b3c5ef24430"
    },
    {
      id: "9",
      title: "777 a little piece of heaven",
      location: "Toronto, ON",
      image: "/polaroids/777.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/32J2bR5gnepj9uHPGVGStr?si=84a55b42ab404585"
    },
    {
      id: "10",
      title: "apocalypse w/ evelyn",
      location: "Shopify Toronto",
      image: "/polaroids/apohackswev.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/5dn6QANKbf76pANGjMBida?si=92c84e6d67764094"
    },
    {
      id: "11",
      title: "dumbo!",
      location: "New York City, NY",
      image: "/polaroids/dumbo.png",
      category: 'polaroids',
      songUrl: " https://open.spotify.com/track/6wXPV6dNRAhFavrRaCdMXT?si=990666c03feb4eea"
    },
    {
      id: "12",
      title: "future 100x engineers",
      location: "Oakville, ON",
      image: "/polaroids/10xeng.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/1auxYwYrFRqZP7t3s7w4um?si=3cf2d5a2f7b74500"
    },
    {
      id: "13",
      title: "entropy ifyyk",
      location: "Oakville, ON",
      image: "/polaroids/entropy ifyyk.PNG",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/551xyaSJsg8hILXFq9JdST?si=b8651a2af5384226"
    },
    {
      id: "14",
      title: "senior sunrise",
      location: "Oakville, ON",
      image: "/polaroids/senior sunrise.PNG",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/0NUqi0ps17YpLUC3kgsZq0?si=027549695c894f41"
    },
    {
      id: "15",
      title: "end of the beginning - djo",
      location: "Chicago, IL",
      image: "/polaroids/end of the begining.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/3qhlB30KknSejmIvZZLjOD?si=2d6b0e552475446b"
    },
    {
      id: "16",
      title: "angelhacks toronto",
      location: "WeWork Toronto",
      image: "/polaroids/thegang.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/6wXPV6dNRAhFavrRaCdMXT?si=990666c03feb4eea"
    },
    {
      id: "17",
      title: "spanish lattes in nyc",
      location: "New York City, NY",
      image: "/polaroids/spanish lattes in nyc.png",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/0TL0LFcwIBF5eX7arDIKxY?si=5dab4294e9d84b81"
    },
    {
      id: "18",
      title: "robotics exec social",
      location: "Oakville, ON",
      image: "/polaroids/execsocial.PNG",
      category: 'polaroids',
      songUrl: "https://open.spotify.com/track/1Ukxccao1BlWrPhYkcXbwZ?si=9fee189e2ea547bb"
    }
  ];

  // Film emulation photos
  const filmPhotos: Photo[] = [
    {
      id: "film1",
      location: "New York City, NY",
      image: "/emulation/littlepak.jpg",
      category: 'film'
    },
    {
      id: "film2",
      location: "New York City, NY",
      image: "/emulation/mainbridge.jpg",
      category: 'film'
    },
    {
      id: "film3",
      location: "New York City, NY",
      image: "/emulation/brownbuilding.jpg",
      category: 'film'
    },
    {
      id: "film4",
      location: "New York City, NY",
      image: "/emulation/pipe.jpg",
      category: 'film'
    },
    {
      id: "film5",
      location: "New York City, NY",
      image: "/emulation/sidebridge.jpg",
      category: 'film'
    },
    {
      id: "film6",
      location: "New York City, NY",
      image: "/emulation/atm.jpg",
      category: 'film'
    }
  ];

  // Disposable photos
  const disposablePhotos: Photo[] = [
    {
      id: "disp1",
      location: "Toronto, ON",
      image: "/disposable/bloom.JPG",
      category: 'disposable'
    },
    {
      id: "disp2",
      location: "Toronto, ON",
      image: "/disposable/darktoronto.JPEG",
      category: 'disposable'
    },
    {
      id: "disp3",
      location: "Oakville, ON",
      image: "/disposable/forest.JPG",
      category: 'disposable'
    },
    {
      id: "disp4",
      location: "Toronto, ON",
      image: "/disposable/meandroro.JPG",
      category: 'disposable'
    },
    {
      id: "disp5",
      location: "Oakville, ON",
      image: "/disposable/oakgo.JPG",
      category: 'disposable'
    },
    {
      id: "disp6",
      location: "Toronto, ON",
      image: "/disposable/rtimes2.JPEG",
      category: 'disposable'
    },
    {
      id: "disp7",
      location: "Toronto, ON",
      image: "/disposable/smilesummertoronto.JPEG",
      category: 'disposable'
    },
    {
      id: "disp8",
      location: "Oakville, ON",
      image: "/disposable/train.JPG",
      category: 'disposable'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTabClick = (tab: 'Polaroids' | 'Film' | 'Disposable') => {
    setActiveTab(tab);
    
    // Update URL with the tab parameter
    const params = new URLSearchParams(searchParams);
    if (tab === 'Polaroids') {
      params.delete('tab'); // Remove parameter for default tab
    } else {
      params.set('tab', tab);
    }
    
    // Update the URL without refreshing the page
    router.replace(`/photos?${params.toString()}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Get photos based on active tab
  const getDisplayPhotos = () => {
    switch(activeTab) {
      case 'Polaroids':
        return polaroidPhotos;
      case 'Film':
        return filmPhotos;
      case 'Disposable':
        return disposablePhotos;
      default:
        return polaroidPhotos;
    }
  };

  const displayPhotos = getDisplayPhotos();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Breadcrumb navigation */}
      <div className="absolute top-4 left-4 z-10">
        <div className="text-sm hover:text-gray-300 transition-colors">
          <Link href="/" className="hover:text-gray-300">SA</Link>
          <span className="mx-1">/</span>
          
          <span onClick={toggleMenu} className="cursor-pointer hover:text-white mx-1">...</span>
          <span className="mx-1">/</span>
          
          <Link href="/photos" className="hover:text-gray-300">photos</Link>
          
          {activeTab !== 'Polaroids' && (
            <>
              <span className="mx-1">/</span>
              <span className="text-white">{activeTab.toLowerCase()}</span>
            </>
          )}
        </div>
        
        {menuOpen && (
          <div className="absolute top-6 left-0 w-48 bg-black border border-gray-800 rounded-md shadow-lg z-10" ref={menuRef}>
            <div className="py-1">
              <Link 
                href="/"
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                home
              </Link>
              <Link 
                href="/experience"
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                experience
              </Link>
              <Link 
                href="/resume"
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                resume
              </Link>
              <Link 
                href="/fieldnotes"
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                fieldnotes
              </Link>
              <Link 
                href="/photos"
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                photos
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="pt-16 pb-8 px-4">
        <h1 className="text-4xl font-serif italic text-center mb-8">photos</h1>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-2">
          <button 
            onClick={() => handleTabClick('Polaroids')} 
            className={`px-4 py-1 rounded-full text-sm ${activeTab === 'Polaroids' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            Polaroids
          </button>
          <button 
            onClick={() => handleTabClick('Film')} 
            className={`px-4 py-1 rounded-full text-sm ${activeTab === 'Film' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            Film Emulation
          </button>
          <button 
            onClick={() => handleTabClick('Disposable')} 
            className={`px-4 py-1 rounded-full text-sm ${activeTab === 'Disposable' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            Disposable
          </button>
        </div>
        
        {/* Photo grid with different layouts based on tab */}
        {activeTab === 'Film' ? (
          // Film Emulation layout - larger images in a 3-column grid
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {displayPhotos.map((photo) => (
              <div key={photo.id} className="flex flex-col group mb-6">
                <div className="relative overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={photo.image} 
                    alt={photo.location} 
                    className="w-full h-auto object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-gray-400">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : activeTab === 'Disposable' ? (
          // Disposable layout - structured grid like the experience page
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {/* Row 1 */}
              <div className="group aspect-[4/3]">
                <div className="relative h-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/disposable/bloom.JPG" 
                    alt="Disposable photo" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group aspect-[4/3]">
                <div className="relative h-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/disposable/darktoronto.JPEG" 
                    alt="Disposable photo" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group aspect-[4/3]">
                <div className="relative h-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/disposable/forest.JPG" 
                    alt="Disposable photo" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Row 2 */}
              <div className="group aspect-[4/3]">
                <div className="relative h-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/disposable/meandroro.JPG" 
                    alt="Disposable photo" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group aspect-[4/3]">
                <div className="relative h-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/disposable/oakgo.JPG" 
                    alt="Disposable photo" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group aspect-[4/3]">
                <div className="relative h-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/disposable/rtimes2.JPEG" 
                    alt="Disposable photo" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Row 3 (if needed) */}
              <div className="group aspect-[4/3]">
                <div className="relative h-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/disposable/smilesummertoronto.JPEG" 
                    alt="Disposable photo" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group aspect-[4/3]">
                <div className="relative h-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/disposable/train.JPG" 
                    alt="Disposable photo" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Polaroids layout - smaller images in a 5-column grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {displayPhotos.map((photo) => (
              <div key={photo.id} className="flex flex-col items-center group">
                <a href={photo.songUrl} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={photo.image} 
                    alt={photo.title || photo.location} 
                    className="w-full max-w-[180px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </a>
                <div className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.title && <p className="text-sm text-white">{photo.title}</p>}
                  <p className="text-xs text-gray-400">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 