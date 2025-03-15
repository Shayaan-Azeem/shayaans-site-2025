'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

// This would typically come from a database or CMS
const blogPosts = [
  {
    title: "Hack The North 2024",
    date: "Jul 2024",
    image: "/photo2.jpg",
    slug: "hack-the-north-2024",
    content: "Content coming soon..."
  },
  {
    title: "What I Learnt From Organizing a Hackathon",
    date: "Jul 2024",
    image: "/droneblue.png",
    slug: "what-i-learnt-from-organizing-a-hackathon",
    content: "Content coming soon..."
  }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const post = blogPosts.find(post => post.slug === params.slug);

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

  if (!post) {
    return <div>Post not found</div>;
  }

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
          
          <span className="text-white">{post.slug}</span>
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
      
      <Breadcrumb segments={['fieldnotes', params.slug]} />
      
      <article className="max-w-3xl mx-auto pt-20">
        <div className="relative w-full h-[200px] mb-8 rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif italic mb-2">{post.title}</h1>
          <p className="text-gray-300 text-sm">{post.date}</p>
        </div>
        
        <div className="prose prose-invert max-w-none px-6">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
} 