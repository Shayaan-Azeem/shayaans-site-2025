"use client"

import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  slug: string;
  overview: string;
  background: string;
  motivation: string;
  team?: {
    name: string;
    link?: string;
  }[];
}

const projects: Record<string, Project> = {
  'apocalypse-hacks': {
    id: "1",
    title: "Apocalypse Hacks",
    description: "Canada's largest high school hackathon",
    year: "2024",
    image: "vickyapo.jpeg",
    slug: 'apocalypse-hacks',
    overview: "Over Summer 2024, I worked on Canada's largest high school hackathon...",
    background: "Apocalypse Hacks was created to bring together high school students...",
    motivation: "The motivation behind Apocalypse Hacks came from...",
    team: [
      { name: "John Doe", link: "https://github.com/johndoe" },
      { name: "Jane Smith", link: "https://github.com/janesmith" }
    ]
  },
  'tensorforest': {
    id: "2",
    title: "TensorForest",
    description: "drone",
    year: "Present",
    image: "drongreen.jpg",
    slug: 'tensorforest',
    overview: "Details about TensorForest project...",
    background: "Details about TensorForest project...",
    motivation: "Details about TensorForest project...",
    team: []
  },
  'white-oaks-robotics-club': {
    id: "3",
    title: "White Oaks Robotics Club",
    description: "we make robots",
    year: "Present",
    image: "Robotics Photo.jpg",
    slug: 'white-oaks-robotics-club',
    overview: "Information about the robotics club...",
    background: "Information about the robotics club...",
    motivation: "Information about the robotics club...",
    team: []
  }
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const project = projects[params.slug];

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

  const navigateToPage = (page: string) => {
    window.location.href = `/${page}`;
    setMenuOpen(false);
  };

  const navigateToHome = () => {
    window.location.href = '/';
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation bar */}
      <nav className="p-4 flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <button onClick={navigateToHome} className="text-gray-400 hover:text-white">
            sa
          </button>
          <span className="text-gray-400">/</span>
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
            ...
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-white">
            projects
          </span>
        </div>
        
        {menuOpen && (
          <div className="absolute top-12 left-12 w-48 bg-black border border-gray-800 rounded-md shadow-lg z-10" ref={menuRef}>
            <div className="py-1">
              <button 
                onClick={() => navigateToPage('home')}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
              >
                home
              </button>
              <button 
                onClick={() => navigateToPage('timeline')}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
              >
                timeline
              </button>
              <button 
                onClick={() => navigateToPage('resume')}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
              >
                resume
              </button>
              <button 
                onClick={() => navigateToPage('fieldnotes')}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
              >
                fieldnotes
              </button>
              <button 
                onClick={() => navigateToPage('experience')}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
              >
                experience
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Banner Image Container */}
      <div className="relative w-full h-64 overflow-hidden flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <div className="w-[800px] h-48 relative transform perspective-1000 rotate-x-12 shadow-2xl">
          <img
            src={`/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl italic font-serif text-center mb-12">{project.title}</h1>
        
        {/* Overview Section */}
        <div className="mb-12">
          <h2 className="text-xl font-normal mb-4">Overview</h2>
          <p className="text-gray-400">{project.overview}</p>
        </div>

        {/* Team Section - if team exists */}
        {project.team && (
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div>
              <h2 className="text-xl font-normal mb-4">Team</h2>
              <div className="space-y-1">
                {project.team.map((member, index) => (
                  <div key={index}>
                    {member.link ? (
                      <a 
                        href={member.link}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {member.name}
                      </a>
                    ) : (
                      <span className="text-gray-400">{member.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <h2 className="text-xl font-normal mb-4">Team</h2>
                <div className="space-y-1">
                  {project.team.map((member, index) => (
                    <div key={`right-${index}`}>
                      {member.link ? (
                        <a 
                          href={member.link}
                          className="text-gray-400 hover:text-white transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {member.name}
                        </a>
                      ) : (
                        <span className="text-gray-400">{member.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Background Section */}
        <div className="mb-12">
          <h2 className="text-xl font-normal mb-4">Background</h2>
          <p className="text-gray-400">{project.background}</p>
        </div>

        {/* Motivation Section */}
        <div className="mb-12">
          <h2 className="text-xl font-normal mb-4">Motivation</h2>
          <p className="text-gray-400">{project.motivation}</p>
        </div>
      </div>
    </div>
  );
} 