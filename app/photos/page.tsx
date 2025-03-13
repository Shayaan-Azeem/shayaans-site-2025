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
      title: "the start of something big w/shanti",
      location: "Waterloo, Toronto",
      image: "/polaroids/2vs bowl.PNG",
      category: 'polaroids'
    },
    {
      id: "2",
      title: "apocalypse hacks w/ greg",
      location: "Shopify Toronto",
      image: "/polaroids/omngreg.png",
      category: 'polaroids'
    },
    {
      id: "3",
      title: "lost in toronto",
      location: "Toronto, ON",
      image: "/polaroids/toronto.png",
      category: 'polaroids'
    },
    {
      id: "4",
      title: "end of the beginning - djp",
      location: "Chicago, IL",
      image: "/polaroids/chicago.png",
      category: 'polaroids'
    },
    {
      id: "5",
      title: "airplane thoughts",
      location: "Above Michigan",
      image: "/polaroids/airplanethoughts.png",
      category: 'polaroids'
    },
    {
      id: "6",
      title: "the one where ayaan turns five",
      location: "Jersey City, NJ",
      image: "/polaroids/ayaanturns5.png",
      category: 'polaroids'
    },
    {
      id: "7",
      title: "dumbo!",
      location: "New York City, NY",
      image: "/polaroids/dumbo.png",
      category: 'polaroids'
    },
    {
      id: "8",
      title: "water water water loo loo loo",
      location: "Waterloo, ON",
      image: "/polaroids/water water water.png",
      category: 'polaroids'
    },
    {
      id: "9",
      title: "apohacks w/ evelyn",
      location: "Shopify Toronto",
      image: "/polaroids/apohacks.png",
      category: 'polaroids'
    },
    {
      id: "10",
      title: "break things build better",
      location: "Shopify Toronto",
      image: "/polaroids/TheGang.png",
      category: 'polaroids'
    },
    {
      id: "11",
      title: "new york new me",
      location: "New York City, NY",
      image: "/polaroids/newyorknewme.png",
      category: 'polaroids'
    },
    {
      id: "12",
      title: "senior sunrise",
      location: "Oakville, ON",
      image: "/polaroids/seniorsunrise.png",
      category: 'polaroids'
    },
    {
      id: "13",
      title: "chem bros",
      location: "White Oaks SS",
      image: "/polaroids/chembros.PNG",
      category: 'polaroids'
    },
    {
      id: "14",
      title: "harvard hoodie",
      location: "Cambridge, MA",
      image: "/polaroids/harvardhoodie.png",
      category: 'polaroids'
    },
    {
      id: "15",
      title: "co-founders core",
      location: "Hack Club HQ",
      image: "/polaroids/cofounderscore.png",
      category: 'polaroids'
    },
    {
      id: "16",
      title: "sharma and azeem",
      location: "Oakville, ON",
      image: "/polaroids/sharmaandazeem.PNG",
      category: 'polaroids'
    },
    {
      id: "17",
      title: "presidents!",
      location: "White Oaks SS",
      image: "/polaroids/presidents!.PNG",
      category: 'polaroids'
    },
    {
      id: "18",
      title: "photobomb",
      location: "Toronto, ON",
      image: "/polaroids/photobomb.PNG",
      category: 'polaroids'
    },
    {
      id: "19",
      title: "guanda & azeem",
      location: "Oakville, ON",
      image: "/polaroids/guandazeem.png",
      category: 'polaroids'
    },
    {
      id: "20",
      title: "lucky sevens",
      location: "Las Vegas, NV",
      image: "/polaroids/777.png",
      category: 'polaroids'
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
                <div className="relative overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={photo.image} 
                    alt={photo.title || photo.location} 
                    className="w-full max-w-[180px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
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