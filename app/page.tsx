import Link from "next/link";
import Image from "next/image";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import ImageGallery from "./image-gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Mobile Image Gallery - Only visible on mobile */}
      <div className="md:hidden w-full">
        <div className="py-4">
          <ImageGallery orientation="horizontal" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-4xl md:text-5xl font-serif italic">Shayaan Azeem</h1>
              <div className="flex items-center space-x-4">
                <Link href="https://x.com/shayaan_azeem" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="https://github.com/Shayaan-Azeem/" aria-label="Github" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/shayaan-azeem/" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="mailto:shayaanazeem10@gmail.com" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={20} />
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex space-x-6 text-lg">
                <li>
                  <Link href="/experience" className="hover:text-gray-300 transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="hover:text-gray-300 transition-colors">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/fieldnotes" className="hover:text-gray-300 transition-colors">
                    Fieldnotes
                  </Link>
                </li>
                <li>
                  <Link href="/photos" className="hover:text-gray-300 transition-colors">
                    Photos
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-gray-400">
                I&apos;m a high school senior from{' '}
                <a href="https://open.spotify.com/track/1zi7xx7UVEFkmKfv06H8x0?si=eccb693cf4164333&nd=1&dlsi=8500e881b915446e" 
                   className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                   target="_blank" 
                   rel="noopener noreferrer">
                  Toronto
                </a>{' '}
                with a passion for computer science and system design. I&apos;m currently:
              </p>

              {/* Current Activities */}
              <ul className="space-y-4">
                <li className="flex items-start text-gray-400">
                  <span className="mr-2">•</span>
                  <div>
                    Building drones with the support of{' '}
                    <a href="https://www.bloomberg.org/government-innovation/spurring-innovation-in-cities/youth-climate-action-fund/" 
                       className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                       target="_blank" 
                       rel="noopener noreferrer">
                      Bloomberg Philanthropies
                    </a>{' '}
                    and{' '}
                    <a href="https://www.oakville.ca/town-hall/news-notices/2024-mayor-s-news-archive/mayor-rob-burton-announces-winners-of-the-2024-youth-climate-action-fund/" 
                       className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                       target="_blank" 
                       rel="noopener noreferrer">
                      The Town of Oakville
                    </a>{' '}
                    to predict forest fires and map vegetation using AI/ML.
                  </div>
                </li>
                
                <li className="flex items-start text-gray-400">
                  <span className="mr-2">•</span>
                  <div>
                    Leading{' '}
                    <a href="https://wossrobotics.ca" 
                       className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                       target="_blank" 
                       rel="noopener noreferrer">
                      White Oaks Robotics Club
                    </a>{' '}
                    <Image 
                      src="/minilogo/wossroboticslogo.png" 
                      alt="WOSS Robotics Logo" 
                      width={16} 
                      height={16} 
                      className="inline mx-1 hover:rotate-180 transition-transform duration-500" 
                    />{' '}
                    (<a href="https://www.robotevents.com/teams/V5RC/8433W"
                        className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                        target="_blank"
                        rel="noopener noreferrer">
                      8433W
                    </a>), a community of over 100 students in Oakville, Ontario, competing in VEX.
                  </div>
                </li>
                
                <li className="flex items-start text-gray-400">
                  <span className="mr-2">•</span>
                  <div>
                    Growing{' '}
                    <a href="https://www.instagram.com/starthackclub/" 
                       className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                       target="_blank" 
                       rel="noopener noreferrer">
                      @starthackclub
                    </a>{' '}
                    <Image 
                      src="/minilogo/hclogoround.png" 
                      alt="Hack Club Logo" 
                      width={16} 
                      height={16} 
                      className="inline mx-1 hover:rotate-180 transition-transform duration-500" 
                    />{' '}
                    creating relatable content and sharing stories of teen developers from around the world.
                  </div>
                </li>
              </ul>

              {/* Previous Experience */}
              <div>
                <p className="text-lg text-gray-400">Recently, I:</p>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">•</span>
                    <div>
                      Organized{' '}
                      <a href="https://apocalypse.hackclub.com/" 
                         className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                         target="_blank" 
                         rel="noopener noreferrer">
                        Apocalypse Hacks
                      </a>{' '}
                      <Image 
                        src="/minilogo/apocalypse.png" 
                        alt="Apocalypse Hacks Logo" 
                        width={32} 
                        height={32} 
                        className="inline mx-1 hover:rotate-180 transition-transform duration-500" 
                      />, Canada's largest high school hackathon, bringing together 150+ students to inspire the next generation of builders.
                    </div>
                  </li>
                  
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">•</span>
                    <div>
                      Won Bronze 🥉 at the{' '}
                      <a href="https://wro-association.org/" 
                         className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                         target="_blank" 
                         rel="noopener noreferrer">
                        Canadian World Robot Olympiad
                      </a>.
                    </div>
                  </li>
                  
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">•</span>
                    <div>
                      Qualified for the{' '}
                      <a href="https://recf.org/vex-robotics-world-championship/" 
                         className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                         target="_blank" 
                         rel="noopener noreferrer">
                        VEX World Robotics Championship
                      </a>{' '}
                      🏆, one of the only public school teams in Ontario to achieve this.
                    </div>
                  </li>
                  
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">•</span>
                    <div>
                      Qualified for{' '}
                      <a href="https://www.deca.org/conferences/icdc" 
                         className="relative inline-block text-white hover:text-gray-300 transition-colors before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-white before:bottom-0 before:left-0 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300"
                         target="_blank" 
                         rel="noopener noreferrer">
                        DECA ICDC
                      </a>{' '}
                      in Orlando, placing in the Top 10 🏅 in Ontario.
                    </div>
                  </li>
                  
                  <li className="flex items-start text-gray-400">
                    <span className="mr-2">•</span>
                    <div>
                      Worked on carbon sequestration estimation 🌍 using satellite imagery, comparing Random Forest and CNNs for accuracy, efficiency, and scalability in predicting forest carbon storage.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Images (only visible on desktop) */}
          <div className="hidden md:block">
            <ImageGallery orientation="vertical" />
          </div>
        </div>
      </div>
    </main>
  );
}