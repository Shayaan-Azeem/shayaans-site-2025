import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import ImageGallery from "./image-gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
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
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href="/fieldnotes" className="hover:text-gray-300 transition-colors">
                    Fieldnotes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-300 transition-colors">
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                I&apos;m a high school senior from <span className="font-medium text-white">Toronto</span> with a passion for computer science and system design. I&apos;m currently:
              </p>

              {/* Current Activities */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    Building drones 🚁 with the support of Bloomberg Philanthropies and The Town of Oakville to predict forest fires and map vegetation using AI/ML.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    Leading White Oaks Robotics 🤖 (8433W), a community of over 100 students in Oakville, Ontario, competing in VEX Robotics.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    Growing @starthackclub 📢, creating relatable content and sharing stories of teen developers from around the world.
                  </div>
                </li>
              </ul>

              {/* Previous Experience */}
              <div>
                <p className="text-lg text-gray-300">Recently, I:</p>
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      Organized Apocalypse Hacks 🎉—Canada's largest high school hackathon—bringing together 150+ students to inspire the next generation of programmers.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      Qualified for DECA ICDC 📈 in Orlando, placing in the Top 10 in Ontario.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      Qualified for the VEX World Robotics Championship 🏆, one of the only public school teams in Ontario to achieve this.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      Worked on carbon sequestration estimation 🌍 using satellite imagery, comparing Random Forest and CNNs for accuracy, efficiency, and scalability in predicting forest carbon storage.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <div>
                      Won Bronze 🥉 at the Canadian World Robot Olympiad.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div>
            <ImageGallery />
          </div>
        </div>
      </div>
    </main>
  );
}
