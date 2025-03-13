"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Define the project data interface
interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  slug: string;
  content?: string; // For the full project content
}

// Sample project data - ideally this would come from a database or API
const projects: Project[] = [
  {
    id: "1",
    title: "Apocalypse Hacks",
    description: "Canada's largest high school hackathon",
    year: "2024",
    image: "/vickyapo.jpeg",
    slug: "apocalypse-hacks",
    content: "Full description of Apocalypse Hacks project..."
  },
  {
    id: "2",
    title: "TensorForest",
    description: "drone",
    year: "Present",
    image: "/drongreen.jpg",
    slug: "tensorforest",
    content: "Full description of TensorForest project..."
  },
  {
    id: "3",
    title: "White Oaks Robotics Club",
    description: "we make robots",
    year: "Present",
    image: "/Robotics Photo.jpg",
    slug: "white-oaks-robotics-club",
    content: "Full description of White Oaks Robotics Club project..."
  }
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Find the current project based on the slug
  const project = projects.find(p => p.slug === params.slug);
  
  // Close menu when clicking outside
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

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Custom breadcrumb that matches the experience page pattern */}
      <div className="absolute top-8 left-8 z-10">
        <div className="text-sm hover:text-gray-300 transition-colors">
          <Link href="/" className="hover:text-gray-300">SA</Link>
          <span className="mx-1">/</span>
          
          <span onClick={toggleMenu} className="cursor-pointer hover:text-white mx-1">...</span>
          <span className="mx-1">/</span>
          
          <Link href="/experience" className="hover:text-gray-300">experience</Link>
          <span className="mx-1">/</span>
          
          <Link href="/experience?tab=Projects" className="hover:text-gray-300">projects</Link>
          <span className="mx-1">/</span>
          
          <span className="text-white">{project.slug}</span>
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

      {/* Project content */}
      <article className="max-w-3xl mx-auto pt-20">
        <div className="relative w-full h-[200px] mb-8 rounded-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif italic mb-2">{project.title}</h1>
          <p className="text-gray-300 text-sm">{project.year}</p>
        </div>
        
        <div className="prose prose-invert max-w-none px-6">
          <p>{project.content || project.description}</p>
          {/* Add more project content here */}
        </div>
      </article>
    </div>
  );
} 