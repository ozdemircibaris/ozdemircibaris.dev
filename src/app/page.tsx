import Image from "next/image";

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
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-10 5L2 7" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ozdemircibaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Barış Özdemirci's GitHub profile"
            className="text-gray-true-300 hover:text-gray-true-100 hover:scale-105 transition-all duration-200"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ozdemircibaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Barış Özdemirci's LinkedIn profile"
            className="text-gray-true-300 hover:text-gray-true-100 hover:scale-105 transition-all duration-200"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
