// pages/experience/index.tsx
"use client";

import React from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Apocalypse Hacks",
    description: "Canada's largest high school hackathon",
    year: "2024",
    image: "/vickyapo.jpeg",
    slug: "apocalypse-hacks",
  },
  {
    id: "2",
    title: "TensorForest",
    description: "drone",
    year: "Present",
    image: "/tensorforestcover.png",
    slug: "tensorforest",
  },
  {
    id: "3",
    title: "White Oaks Robotics Club",
    description: "we make robots",
    year: "Present",
    image: "/zaneandshayaan.png",
    slug: "white-oaks-robotics-club",
  }
];

const ExperiencePage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={
              project.slug === "white-oaks-robotics-club"
                ? "https://wossrobotics.ca/"
                : `/projects/${project.slug}`
            }
            target={project.slug === "white-oaks-robotics-club" ? "_blank" : "_self"}
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              {/* Additional content */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
