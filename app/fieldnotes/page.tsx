'use client';

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from '@/components/Breadcrumb';

const blogPosts = [
  {
    title: "Hack The North 2024",
    date: "Jul 2024",
    image: "/photo2.jpg",
    slug: "hack-the-north-2024"
  },
  {
    title: "What I Learnt From Organizing a Hackathon",
    date: "Jul 2024",
    image: "/droneblue.png",
    slug: "what-i-learnt-from-organizing-a-hackathon"
  }
];

export default function FieldNotes() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="absolute top-8 left-8 z-10">
        <div className="text-sm hover:text-gray-300 transition-colors">
          <Link href="/" className="hover:text-gray-300">SA</Link>
          <span className="mx-1">/</span>
          
          <span onClick={toggleMenu} className="cursor-pointer hover:text-white mx-1">...</span>
          <span className="mx-1">/</span>
          
          <Link href="/fieldnotes" className="hover:text-gray-300">fieldnotes</Link>
          <span className="mx-1">/</span>
          
          <Link 
            href="/Shayaan%20Azeem%20-%20Resume%20(March%202025).pdf" 
            className="hover:text-gray-300"
          >
            Resume
          </Link>
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
                href="/Shayaan%20Azeem%20-%20Resume%20(March%202025).pdf"
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
      
      <h1 className="text-4xl font-serif italic text-center mb-8 pt-20">fieldnotes</h1>
      <div className="space-y-12">
        {blogPosts.map((post, index) => (
          <Link 
            href={`/fieldnotes/${post.slug}`} 
            key={index}
            className="block text-center"
          >
            <div className="relative w-full max-w-3xl mx-auto h-[200px] overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-90">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h2 className="text-2xl italic text-white mb-2 transition-colors duration-300 group-hover:text-gray-100">{post.title}</h2>
                  <p className="text-gray-300 text-sm transition-opacity duration-300 group-hover:opacity-100">{post.date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 