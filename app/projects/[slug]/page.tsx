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
  content?: React.ReactNode; // For the full project content
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
      content: (
        <>
          <div className="mb-10">
            <h2 className="text-2xl font-inter mb-4">Summary</h2>
            <p className="mb-6">
              Apocalypse Hacks is Canada's largest high school hackathon (as of March 2025). It took place from <span className="font-semibold">May 17-19, 2024</span>, at Shopify's Toronto office. We brought together 150+ high schoolers, and in just 36 hours, they built 40+ projects, including everything from a peashooter to Uber for automated drones.
            </p>
            <h2 className="text-2xl font-inter mb-4">Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
              {[
                { name: "Acon Lin", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/60.png", site: "https://aconlin.vercel.app/" },
                { name: "Arav Narula", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/71.png", site: "https://www.radioblahaj.com/?ref=apocalypse" },
                { name: "Mutammim Sarkar", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/92.png", site: "https://www.mutammim.com/" },
                { name: "Shayaan Azeem", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/83.png", site: "https://www.linkedin.com/in/shayaan-azeem/" },
                { name: "Ryan Di Lorenzo", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/04.png", site: "https://limeskey.com/" },
                { name: "Gregory Gu", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/15.png", site: "https://www.linkedin.com/in/gregory-gu-b777212ba/" },
                { name: "Sam Liu", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/26.png", site: "https://samliu.dev/" },
                { name: "Sarvesh Mohan Kumar", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/37.png", site: "https://www.linkedin.com/in/sarvesh-mohan-kumar-a009ba268/" },
                { name: "Evelyn Wong", img: "https://cloud-8bqvtn5zz-hack-club-bot.vercel.app/08.png", site: "http://evelynw.ong/" },
                { name: "Vivian Yuan", img: "https://cloud-jy1p4tt69-hack-club-bot.vercel.app/59.png", site: "https://www.linkedin.com/in/vivian-yuan-240716284/" },
              ].map((member) => (
                <div key={member.name} className="flex flex-col items-center mb-2">
                  <a href={member.site} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <img src={member.img} alt={member.name} className="w-12 h-12 rounded-full mb-1" />
                    <span className="text-gray-400 text-center text-sm">{member.name}</span>
                  </a>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-inter mb-4">Why Did We Build This?</h2>

            <p className="mb-6 font-inter">
              As someone who's been interested in hacking and building things for most of my high school life, I have often found myself yearning for a sense of community and belonging. Toronto, though it may be a hub of innovation, really doesn't and didn't have many opportunities for high schoolers interested in tech and building things. Now, yes, there are some hackathons hosted here and there, but nothing out of the ordinary. If you go to those events, you find no sense of purpose or fulfillment because everyone is there to pad their resumes…
            </p>
            <p className="mb-6 font-inter">
              That realization led to Apocalypse Hacks. We wanted to create a space for like-minded high schoolers to come together and build cool sh*t. And I think we did that.
            </p>
          </div>
  
          <div className="mb-10">
            <h2 className="text-2xl font-inter mb-4">The Journey</h2>
            <p className="mb-6 font-inter">
              I joined the core team in early 2024. At that point, we were actively looking for sponsors and a venue, and we cold emailed a LOT. We got a ton of nos and maybes, but finally, Shopify said yes, and the rest? Well, that was history.
            </p>
            
            <h2 className="text-2xl font-inter mb-4">Rejection Emails</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <img src="/apoimages/rejection1.png" alt="Rejection Email 1" className="rounded-lg" />
              <img src="/apoimages/reject2.png" alt="Rejection Email 2" className="rounded-lg" />
              <img src="/apoimages/rejection3.png" alt="Rejection Email 3" className="rounded-lg" />
              <img src="/apoimages/rejection4.png" alt="Rejection Email 4" className="rounded-lg" />
            </div>
            
            <h2 className="text-2xl font-inter mb-4">Timeline of Talks with Shopify</h2>
            <p className="mb-4">
              This was definitely a lengthy process, and during this, we were still actively reaching out to other people and companies:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Jan 8 - Original email to Tobi</li>
              <li>Jan 11 - Follow-up #1 with Tobi</li>
              <li>Jan 15 - Original email to Tobi's EA</li>
              <li>Jan 16 - Follow-up #2 with Tobi (oops)</li>
              <li>Feb 13 - Email to Shopify eng person</li>
              <li>Feb 14 - Reply from someone else at Shopify</li>
              <li>Feb 20 - Exploratory call</li>
              <li>Feb 23 - Reply: "positive conversations"</li>
              <li>Feb 28 - Reply: "mostly approved"</li>
              <li>Mar 1 - Reply: "getting closer..."</li>
              <li>Mar 6 - Confirmation from Shopify!!!</li>
              <li>Mar 8 - We're actually gonna make this happen call!</li>
              <li>Mar 14 - Speaking with the event producer (shoutout to Jennifer for all the help) + visiting the venue</li>
            </ul>
          </div>
  
          <div className="mb-10">
            <h2 className="text-2xl font-inter mb-4">March 14 - The First Look at Shopify</h2>
            <p className="mb-6">
              Walking into Shopify's Toronto HQ for the first time was surreal. It was everything we could've wanted and even more. The venue was huge, it had amazing views of the city, the CN Tower—it felt like the space motivated us even more than we already were.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <img src="/apoimages/shopify rooftop.png" alt="Shopify Rooftop" className="rounded-lg" />
              <img src="/apoimages/shopify interior.png" alt="Shopify Interior" className="rounded-lg" />
              <img src="/apoimages/torontoview.JPG" alt="Toronto View" className="rounded-lg" />
              <img src="/apoimages/teamselfie.jpg" alt="team View" className="rounded-lg" />
            </div>
          </div>
  
          <div className="mb-10">
            <h2 className="text-2xl font-inter mb-4">I Got 99 Problems, and Money is the Biggest One</h2>
            <p className="mb-6">
              The next week, we sent even more emails, got meetings with some big Canadian companies and banks, and kept grinding.
              Then, Hack Club reached out…
            </p>
            <p className="mb-6">
              They had been keeping an eye on what we were building, and seeing us secure Shopify as a venue convinced them that we were legit. They offered to fully acquire the event as their spring hackathon and back it with $35K USD.
            </p>
            
            <h2 className="text-2xl font-inter mb-4">April 2, 2024</h2>
            <p className="mb-6">
              At first, we weren't sure. But after talking it through, we realized this was the best thing that could've happened. Hack Club stood for the same values we did—empowering youth to build things they want to. It just made sense.
            </p>
            <p className="mb-6">
              With money in hand, we got to work. I built a Trello board with auto-assignments, time tracking, and Slack integration, which would be the basis of all this.
            </p>
            <div className="my-6">
              <img src="/apoimages/trello.png" alt="Trello Board" className="rounded-lg" />
            </div>
          </div>
  
          <div className="mb-10">
            <h2 className="text-2xl font-inter mb-4">Organizing the Event</h2>
            <p className="mb-6">
              Over the next few weeks, #apo-core on Slack became our home base. This is where we figured out:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Food (Poke bowls, Michelin-star donuts, boba)</li>
              <li>Custom PCB Badges (which, lol, didn't even arrive on time, but that's a story for another day)</li>
              <li>Snacks, Merch, Stickers, Shirts</li>
              <li>Caffeine Planning - We very proudly had more Red Bull and Awake at our high school hackathon than Hack the North managed to get for Canada's largest hackathon (weird flex, but okay, I know).</li>
              <li>Vendor Outreach - I remember getting responses from Chinese vendors on Alibaba at 4 AM hahah.</li>
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <img src="/apoimages/merch1.jpg" alt="Merchandise" className="rounded-lg" />
              <img src="/apoimages/sticker2.png" alt="Stickers" className="rounded-lg" />
              <img src="/apoimages/caffeine.jpg" alt="Caffeine" className="rounded-lg" />
            </div>
            
            <p className="mb-6">
              From March to May 17th, we barely slept. There were 2 AM Slack calls on school nights, all-day Saturday meetings, and a ridiculous amount of last-minute scrambling. But somehow, we made it happen.
            </p>
            <div className="my-6">
              <img src="/apoimages/12am.png" alt="Late Night Work" className="rounded-lg" />
            </div>
          </div>
  
          <div className="mb-10">
            <h2 className="text-2xl font-inter mb-4">How We Organized (we were just built different tho lol)</h2>
            <p className="mb-4">
              Most hackathons have subteams, divisions, commitees. We did not.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li><span className="font-medium">No Specified Roles</span> - People just took on what they were good at (me? Logistics, Branding/Marketing, Media, and a whole bunch of whatever else we needed, etc.).</li>
              <li><span className="font-medium">Team-wide Stand-up Meetings</span> - NOT split by divisions or clusters. This allowed everyone to be in the loop and understand where we were all at.</li>
              <li><span className="font-medium">Small but Agile Team</span> - Our team was 7-8 people until the very end when it became 10. Even at this scale, we remained agile, working in sync, sharing tasks, and being responsible for our own things much more easily. There was no redundancy, no one to report to, no stupid chains of command.</li>
              <li>
                <span className="font-medium">Idea-Driven Culture</span> - Anyone could pitch an idea. If you had something cool in mind and could pull it off, you just… did it. No approval process, no gatekeeping. I credit this ideology to Hack Club, but it was really instilled all throughout the team. I also credit <a href="https://aconlin.vercel.app/" target="_blank" rel="noopener noreferrer">Acon</a> for leading by actually doing this! So many of our best ideas, like the card game and bottle cap currency, came from random late night Slack messages.
              </li>
            </ul>
            
            <div className="my-6">
              <img src="/apoimages/cardgame.jpg" alt="Card Game" className="rounded-lg" />
            </div>
            
            <h2 className="text-2xl font-inter mb-4">The Takeaway</h2>
            <p className="mb-6">
              If you have the ability to make it and think it's worth it to do so, then make it. Don't worry about semantics like titles and experience. The best way to learn is by doing. None of us actually knew how to do any of this beforehand, but it's probably more efficient to learn by doing, then breaking it, then building it again.
            </p>
          </div>
  
          <div className="mb-10">
            <h2 className="text-2xl font-inter mb-4">May 17-19: The Hackathon</h2>
            <p className="mb-6">
              It was so crazy. Some things went wrong, some went well, but a lot went even better than we had planned. We had a full house—EVERY PERSON WHO SIGNED UP (with the exception of one) showed up. 150+ hackers. 36 hours. 40+ projects. Absolute insanity.
            </p>
            <p className="mb-6">
              I'm so grateful for everyone who attended and shipped a project! It was so cool to meet everyone and people with the same interests as me. Like I said in the beginning, we set out to create a place to meet our people, and we definitely did just that.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 my-6">
              <img src="/apoimages/event0.jpg" alt="Event Image 0" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/event1.jpeg" alt="Event Image 1" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/event2.jpg" alt="Event Image 2" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/event3.jpg" alt="Event Image 3" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/event4.png" alt="Event Image 4" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/event6.jpg" alt="Event Image 6" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/lightiningtalk1.jpg" alt="Lightning Talk" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/lockedineddie.png" alt="Locked in Eddie" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/selfie.png" alt="Selfie" className="rounded-lg object-cover h-full w-full" />
              <img src="/apoimages/workshop1.png" alt="Workshop 1" className="rounded-lg object-cover h-full w-full" />
            </div>

            {/* Combined paragraph for the video recap */}
            <p className="font-inter mb-4 text-center">
              Check out this documentary I made to recap the event! :)
            </p>
            {/* Embed YouTube Video */}
            <div className="flex justify-center my-8">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QvCoISXfcE8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              </div>
                <div className="flex justify-center my-8">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/1oAwsWBovWRIp7qLMGPIet?utm_source=generator&theme=0"
              width="80%"
              height="100"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
            
          </div>
        </>
      )
  },
  {
    id: "2",
    title: "TensorForest",
    description: "drone",
    year: "Present",
    image: "/tensorforestcover.png", // Ensure this path is correct
    slug: "tensorforest",
    content: <>
    <div className="mb-10">
      <h2 className="text-2xl font-inter mb-4">The Problem</h2>
      <p className="mb-6">
        Wildfires have become increasingly frequent and severe, devastating forest ecosystems and contributing significantly to greenhouse gas emissions. The UN Environment Programme (UNEP) predicts a global rise in extreme wildfires by 14% by 2030, 30% by 2050, and 50% by 2100. Climate change and wildfires form a dangerous feedback loop, worsening the damage and increasing the need for fire prevention.
      </p>
      <div className="my-6 flex justify-center">
        <div className="w-3/4">
          <img src="/tensorforest/tensorforestv1.png" alt="TensorForest V1" className="rounded-lg w-full" />
          <p className="text-sm text-gray-500 mt-2">Our first prototype of TensorForest, designed to capture high-resolution forest data for wildfire risk assessment.</p>
        </div>
      </div>
      <h2 className="text-2xl font-inter mb-4">The Opportunity</h2>
      <p className="mb-6">
        Effective wildfire prevention requires accurate, up to date/ real-time data. However, current solutions have big limitations:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li><span className="font-medium">Expensive drones</span>: High-end wildfire monitoring drones cost $25,000 or more, making them inaccessible to many organizations and communities.</li>
        <li><span className="font-medium">Manual surveying</span>: Traditional forest monitoring methods are slow, labor-intensive, and costly.</li>
        <li><span className="font-medium">Limited access</span>: Fire departments in wealthier nations have access to advanced technology, while vulnerable communities, such as farmers in Kenya, Indonesia, and Vietnam, lack affordable wildfire prevention tools.</li>
        <li><span className="font-medium">Satellite imagery limitations</span>: Satellites do not provide high-resolution, up-to-date data necessary for proactive fire prevention.</li>
      </ul>
    </div>
  
    <div className="mb-10">
      <h2 className="text-2xl font-inter mb-4">How It Works</h2>
      <p className="mb-6 font-inter">
        TensorForest is an autonomous drone system designed to provide high-resolution forest monitoring and wildfire prediction. The process includes:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li><span className="font-medium">Selecting a target region</span> for assessment.</li>
        <li><span className="font-medium">Generating a flight plan</span> to autonomously cover the area.</li>
        <li><span className="font-medium">Capturing multiple high-resolution images and spatial data</span>.</li>
        <li><span className="font-medium">Stitching images together using OpenCV</span> to create a detailed forest map.</li>
        <li><span className="font-medium">Generating a Digital Elevation Model (DEM)</span> by processing spatial points.</li>
        <li><span className="font-medium">Running the data through a vision transformer model</span>, integrating climate data such as temperature and precipitation.</li>
        <li><span className="font-medium">Producing a wildfire risk heat map</span>, classifying vegetation and identifying high-risk areas/how fire is likely to spread based on detected forest fire lines.</li>
        <li><span className="font-medium">Utilizing data for fire prevention planning</span>, helping determine optimal locations to cut fire lines and mitigate wildfire spread.</li>
      </ul>
      
      <div className="my-8">
        <img src="/tensorforest/tensorforest v3 .png" alt="TensorForest V3" className="rounded-lg w-full" />
        <p className="text-sm text-gray-500 mt-2">The latest version of TensorForest featuring improved hardware and AI capabilities for more accurate wildfire risk prediction.</p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div>
          <img src="/tensorforest/vegatation map capture, stich1.png" alt="Vegetation Map Capture" className="rounded-lg w-full" />
          <p className="text-sm text-gray-500 mt-2">A stitched vegetation map created by TensorForest, showcasing our ability to create comprehensive forest visualizations from multiple drone captures.</p>
        </div>
        <div>
          <img src="/tensorforest/Normalized Difference Vegetation Index  capture for heat map.png" alt="NDVI Capture for Heat Map" className="rounded-lg w-full" />
          <p className="text-sm text-gray-500 mt-2">An NDVI capture used to generate heat maps, showing vegetation health and potential fire risk areas.</p>
        </div>
        <div>
          <img src="/tensorforest/gopro to capture Normalized Difference Vegetation Index.png" alt="GoPro NDVI Capture" className="rounded-lg w-full" />
          <p className="text-sm text-gray-500 mt-2">Our modified GoPro setup used to capture NDVI data, providing crucial vegetation health information for risk assessment.</p>
        </div>
        <div>
          <img src="/tensorforest/campimod.png" alt="Pi Computer Module" className="rounded-lg w-full" />
          <p className="text-sm text-gray-500 mt-2">The Raspberry Pi computer module with Edge TPU that powers our onboard image processing and AI analysis capabilities.</p>
        </div>
      </div>
    </div>
  
    <div className="mb-10">
      <h2 className="text-2xl font-inter mb-4">Current Development & Funding Needs</h2>
      <p className="mb-6">
        We are actively seeking microgrants and funding to enhance TensorForest's capabilities:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>
          <span className="font-medium">Scaling hardware and software</span>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Acquiring higher-resolution LiDAR sensors for improved accuracy.</li>
            <li>Developing longer-range drones for large-scale forest monitoring.</li>
          </ul>
        </li>
        <li>
          <span className="font-medium">Enhancing AI Model Accuracy</span>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Continuing to train and refine the wildfire risk assessment model, requiring more computing power and diverse datasets for improved accuracy.</li>
          </ul>
        </li>
      </ol>
      
      <h2 className="text-2xl font-inter mb-4">Get Involved</h2>
      <p className="mb-6">
        We are continuously working on improving TensorForest. If you're interested in this project or want to collaborate, feel free to reach out at <a href="mailto:shayaanazeem@gmail.com" className="text-blue-500 hover:underline">shayaanazeem@gmail.com</a>.
      </p>
    </div>
  </>  },
  {
    id: "3",
    title: "White Oaks Robotics Club",
    description: "we make robots",
    year: "Present",
    image: "/zaneandshayaan.png",
    slug: "white-oaks-robotics-club",
    content:(
      <a 
        href="https://wossrobotics.ca/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Visit the website for more info. I'm gonna come back and upload this sometime soon xd
      </a>
    )
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