import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-md w-full space-y-6">
        {/* Profile Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Barış Özdemirci"
            width={96}
            height={96}
            className="w-full h-full object-cover object-[center_25%] scale-125"
            priority
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-1">
          <h1 className="text-3xl font-sans font-medium tracking-tight text-white">Barış Özdemirci</h1>
          <h2 className="text-xl font-sans tracking-tight text-gray-true-300">Full-Stack Developer</h2>
        </div>

        {/* Bio */}
        <div>
          <p className="text-base font-sans leading-relaxed tracking-tight text-gray-true-400">
            Full-stack developer based in Berlin, Germany. I specialize in building scalable systems and clean user
            interfaces using React, React Native, Node.js, and TypeScript. Focused on delivering scalable, domain-driven
            systems for startups and early-stage products.
          </p>
        </div>

        {/* Contact Icons */}
        <div className="flex gap-4">
          {/* Email */}
          <a
            href="mailto:ozdemircibaris@gmail.com"
            aria-label="Send email to ozdemircibaris@gmail.com"
            className="text-gray-true-300 hover:text-gray-true-100 hover:scale-105 transition-all duration-200"
          >
            <FaEnvelope size={22} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ozdemircibaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Barış Özdemirci's GitHub profile"
            className="text-gray-true-300 hover:text-gray-true-100 hover:scale-105 transition-all duration-200"
          >
            <FaGithub size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ozdemircibaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Barış Özdemirci's LinkedIn profile"
            className="text-gray-true-300 hover:text-gray-true-100 hover:scale-105 transition-all duration-200"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}
