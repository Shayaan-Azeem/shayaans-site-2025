'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  segments?: string[]; // Optional custom segments
}

export default function Breadcrumb({ segments }: BreadcrumbProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Generate path segments from the URL if not provided
  const pathSegments = segments || pathname.split('/').filter(Boolean);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Build the breadcrumb links
  const renderBreadcrumb = () => {
    return (
      <div className="text-sm hover:text-gray-300 transition-colors">
        <Link href="/" className="hover:text-gray-300">SA</Link>
        <span className="mx-1">/</span>
        
        <span onClick={toggleMenu} className="cursor-pointer hover:text-white mx-1">...</span>
        
        {pathSegments.map((segment, index) => {
          // Build the path up to this segment
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          
          return (
            <React.Fragment key={index}>
              <span className="mx-1">/</span>
              {index === pathSegments.length - 1 ? (
                // Last segment is current page (not clickable)
                <span className="text-white">{segment}</span>
              ) : (
                // Other segments are links to parent pages
                <Link href={path} className="hover:text-gray-300">
                  {segment}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="absolute top-8 left-8 z-10">
      {renderBreadcrumb()}
      
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
              href="/timeline"
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              timeline
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
              href="/experience"
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              experience
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 