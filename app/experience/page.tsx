"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { ChevronLeft, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Breadcrumb from '@/components/Breadcrumb';

interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  logo?: string;
}

interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  type: "tournament" | "global";
  emoji?: string; // Added emoji property
}

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  slug?: string; // Added for navigation
}

interface BreadcrumbProps {
  activeTab: string;
}

// Custom breadcrumb for experience page to handle tabs
function ExperienceBreadcrumb({ activeTab }: BreadcrumbProps) {
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
    <div className="absolute top-8 left-8 z-10">
      <div className="text-sm hover:text-gray-300 transition-colors">
        <Link href="/" className="hover:text-gray-300">SA</Link>
        <span className="mx-1">/</span>
        
        <span onClick={toggleMenu} className="cursor-pointer hover:text-white mx-1">...</span>
        <span className="mx-1">/</span>
        
        <Link href="/experience" className="hover:text-gray-300">experience</Link>
        
        {activeTab !== 'Work' && (
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

// Create a client component that uses useSearchParams
function ExperienceContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  // Set initial tab based on URL parameter or default to 'Work'
  const [activeTab, setActiveTab] = useState<'Work' | 'Projects' | 'Awards'>(
    (tabParam as 'Work' | 'Projects' | 'Awards') || 'Work'
  );
  
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Sample data for work experiences
  const experiences: Experience[] = [
    {
      "id": "1",
      "title": "Content/Growth Intern",
      "organization": "Hack Club",
      "period": "jul 2024 - present",
      "description": "grew @starthackclub to 100k followers",
      "tags": ["social media marketing", "content strategy", "web content optimization"],
      "logo": "hclogo.png"
    },
    {
      "id": "2",
      "title": "President/Founder",
      "organization": "White Oaks Robotics Club",
      "period": "sep 2023 - present",
      "description": "started the robotics club at my school, grew it to 100+ members, top 100 teams in the world, qualified for vex worlds, won 8 regional/provincial awards, garnered $7500+ in funds",
      "tags": ["team management", "project management", "start-up leadership"],
      "logo": "wbotlogo.jpg"
    },
    {
      "id": "3",
      "title": "Organizer",
      "organization": "Apocalypse Hacks (Backed by Hack Club and Shopify)",
      "period": "dec 2023 - jun 2024",
      "description": "founded canada's largest high school hackathon (150 attendees, 40+ projects shipped), raised $50k from sponsors like shopify and doordash with a team of 10",
      "tags": ["fundraising", "project management", "operations management", "communication"],
      "logo": "apohackslogo.jpg"
    },
    {
      "id": "4",
      "title": "Head Captain",
      "organization": "WOSS Electrathon Team",
      "period": "jun - aug 2023",
      "description": "building an electric vehicle to race at uwaterloo, also trying to make it autonomous for fun",
      "tags": ["electric vehicles", "computer vision", "machine learning", "autonomous systems", "control systems", "mechanical design", "electrical engineering"],
      "logo": "eleclogo.jpg"
    },
    {
      "id": "5",
      "title": "President",
      "organization": "Linguistics Club",
      "period": "sep 2024 - present",
      "description": "organized naclo competition, grew to 15 members",
      "tags": [],
      "logo": "wosssling.jpg"
    }
  ];  

  // Sample data for awards with custom emojis
  const awards: Award[] = [
    // 🏆 Major & High-Stakes Awards
    { id: '1', title: 'Bloomberg Youth Climate Award', organization: 'Bloomberg Philanthropies', year: '2024', type: 'global', emoji: '🌳' },
    { id: '2', title: '3rd Place/Bronze Medalist', organization: 'World Robot Olympiad Canada (Future Innovators)', year: '2024', type: 'global', emoji: '🤖' },
    { id: '3', title: 'Tournament Finalists', organization: 'Ontario VRC H.S High Stakes Provincial Championships', year: '2025', type: 'tournament', emoji: '🏆' },
    { id: '4', title: 'ICDC Qualifier/Top 10 Provincials', organization: 'DECA Personal Financial Literacy', year: '2025', type: 'global', emoji: '📈' },

    // 🤖 Robotics Awards
    { id: '5', title: 'Excellence Award', organization: 'Waterloo V5RC Qualifying Competition', year: '2025', type: 'tournament', emoji: '🏅' },
    { id: '6', title: 'Excellence Award', organization: 'Toronto February VEX V5 Robotics Competition', year: '2025', type: 'tournament', emoji: '🏅' },
    { id: '7', title: 'Excellence Award', organization: 'Brampton V5RC Qualifier', year: '2025', type: 'tournament', emoji: '🏅' },
    { id: '8', title: 'Tournament Champions', organization: 'Glenforest iDESIGN 365 VEX V5 Robotics Competition', year: '2024', type: 'tournament', emoji: '🥇' }, 
    { id: '9', title: 'Top Exam Provincials', organization: 'DECA Personal Financial Literacy (Top 20/200)', year: '2025', type: 'global', emoji: '📝' },

    // 🌍 National & International Recognition
    { id: '10', title: 'JOT Masters Finalist', organization: 'National Case Competition', year: '2022', type: 'global', emoji: '📚' },
    { id: '11', title: 'Global Finalist', organization: 'MathWorks FollowThePath Challenge', year: '2024', type: 'global', emoji: '👨🏻‍💻' },
    { id: '12', title: 'Global Finalist', organization: 'REC Marketing Challenge', year: '2025', type: 'global', emoji: '📢' },
    { id: '13', title: 'DECA Stock Market Game Finalist', organization: 'North Atlantic (Top 30/1200+)', year: '2023', type: 'global', emoji: '🤑' },
  ];

  // Update projects data with slugs for navigation
  const projects: Project[] = [
    {
      id: "1",
      title: "Apocalypse Hacks",
      description: "Canada's largest high school hackathon",
      year: "2024",
      image: "vickyapo.jpeg",
      slug: "apocalypse-hacks"
    },
    {
      id: "2",
      title: "TensorForest",
      description: "drone",
      year: "Present",
      image: "drongreen.jpg",
      slug: "tensorforest"
    },
    {
      id: "3",
      title: "White Oaks Robotics Club",
      description: "we make robots",
      year: "Present",
      image: "Robotics Photo.jpg",
      slug: "white-oaks-robotics-club"
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

  const handleTabClick = (tab: 'Work' | 'Projects' | 'Awards') => {
    setActiveTab(tab);
    
    // Update URL with the tab parameter
    const params = new URLSearchParams(searchParams);
    if (tab === 'Work') {
      params.delete('tab'); // Remove parameter for default tab
    } else {
      params.set('tab', tab);
    }
    
    // Update the URL without refreshing the page
    router.replace(`/experience?${params.toString()}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateToPage = (page: string) => {
    window.location.href = `/${page}`;
    setMenuOpen(false);
  };

  const navigateToProject = (slug: string) => {
    window.location.href = `/projects/${slug}`;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ExperienceBreadcrumb activeTab={activeTab} />

      {/* Main content */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 pt-20">
        <h1 className="text-4xl font text-center my-8 italic font-serif">My Experience</h1>
        
        {/* Tabs - Keeping the original tab names */}
        <div className="flex justify-center mb-8 space-x-2">
          <button 
            onClick={() => handleTabClick('Work')} 
            className={`px-4 py-1 rounded-full text-sm ${activeTab === 'Work' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            Work
          </button>
          <button 
            onClick={() => handleTabClick('Projects')} 
            className={`px-4 py-1 rounded-full text-sm ${activeTab === 'Projects' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => handleTabClick('Awards')} 
            className={`px-4 py-1 rounded-full text-sm ${activeTab === 'Awards' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            Awards
          </button>
        </div>
        
        {/* Content area */}
        <div className="flex flex-col mx-auto max-w-4xl">
          {activeTab === 'Projects' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="relative group cursor-pointer"
                  onClick={() => {
                    // Use the slug directly or generate one from the title if not provided
                    const slug = project.slug || project.title.toLowerCase().replace(/ /g, '-');
                    navigateToProject(slug);
                  }}
                >
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl -z-10"></div>
                  
                  {/* Card content */}
                  <div className="relative bg-black rounded-lg overflow-hidden border border-gray-800/50 group-hover:border-gray-700/50 transition-all duration-300">
                    <div className="aspect-[16/9] relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-base">{project.title}</h3>
                        <span className="text-gray-500 text-sm">{project.year}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : activeTab === 'Awards' ? (
            // Awards content
            <div className="space-y-4 relative">
              {/* Vertical line - FIXED POSITION to center through circles */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700" style={{ transform: 'translateX(-50%)' }}></div>
              
              {awards.map((award) => (
                <div key={award.id} className="flex items-start">
                  <div className="mr-4 relative">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center z-10 relative">
                      <span className={`${
                        award.type === 'tournament' ? 'text-yellow-400' : 'text-blue-400'
                      } text-2xl`}>
                        {award.emoji || (award.type === 'tournament' ? '🏆' : '🥇')}
                      </span>
                    </div>
                  </div>
                  <div className={`flex-1 p-4 rounded-lg mb-4 ${
                    award.type === 'tournament' 
                      ? 'bg-yellow-900/20 border border-yellow-700/30' 
                      : 'bg-blue-900/20 border border-blue-700/30'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold">{award.title}</h3>
                        <p className="text-sm text-gray-400">{award.organization}</p>
                        <p className="text-xs text-gray-500 mt-1">{award.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Work/Experience content
            <div className="space-y-0 relative">
              {/* Vertical line - FIXED POSITION to center through circles */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" style={{ transform: 'translateX(-50%)' }}></div>
              
              {experiences.map((exp) => (
                <div key={exp.id} className="flex items-start mb-8">
                  {/* Left side - logo in timeline */}
                  <div className="mr-6 relative">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center z-10 relative">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                  
                  {/* Right side - experience details */}
                  <div className="flex-1">
                    {/* Top row with company info */}
                    <div className="flex items-center mb-2">
                      <div className="w-14 h-14 flex items-center justify-center mr-3">
                        {exp.logo && (
                          <img 
                            src={exp.logo} 
                            alt={exp.organization} 
                            className="w-12 h-12 object-contain rounded-md shadow-md hover:scale-110 transition-transform duration-200"
                          />
                        )}
                        {!exp.logo && (
                          <div className="w-12 h-12 bg-gray-600 rounded-md shadow-md hover:scale-110 transition-transform duration-200"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-base">{exp.title}</h3>
                        <p className="text-sm text-gray-400">{exp.organization}</p>
                      </div>
                      <div className="text-sm text-gray-400 ml-auto">
                        {exp.period}
                      </div>
                    </div>
                    
                    {/* Experience description */}
                    <div className="bg-gray-900 bg-opacity-40 rounded-lg p-4 mt-2">
                      <p className="text-sm">{exp.description}</p>
                      
                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {exp.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-0.5 bg-gray-800 rounded-md text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense
export default function ExperiencePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    }>
      <ExperienceContent />
    </Suspense>
  );
}