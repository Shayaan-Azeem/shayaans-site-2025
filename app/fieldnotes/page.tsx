'use client';

import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Human Simulation Lab",
    date: "Jul 2024",
    image: "/photo2.jpg",
    slug: "human-simulation-lab-1"
  },
  {
    title: "The Human Simulation Lab",
    date: "Jul 2024",
    image: "/droneblue.png",
    slug: "human-simulation-lab-2"
  },
  {
    title: "The Human Simulation Lab",
    date: "Jul 2024",
    image: "/roboticsphoto.jpg",
    slug: "human-simulation-lab-3"
  }
];

export default function FieldNotes() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="absolute top-8 left-8">
        <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
          S3 / ... / fieldnotes
        </Link>
      </div>
      
      <h1 className="text-4xl font-serif italic text-center mb-8">fieldnotes</h1>
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