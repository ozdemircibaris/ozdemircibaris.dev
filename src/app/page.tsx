import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-md w-full space-y-6">
        {/* Profile Image */}
        <div>
          <Image
            src="/avatar.jpg"
            alt="Barış Özdemirci"
            width={96}
            height={96}
            className="rounded-full w-24 h-24 object-cover object-[center_25%]"
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
            interfaces using React, React Native, Node.js, and TypeScript. Currently open to freelance or consulting
            opportunities.
          </p>
        </div>

        {/* Contact Icons */}
        <div className="flex space-x-4">
          {/* Email */}
          <a
            href="mailto:ozdemircibaris@gmail.com"
            aria-label="Send email to ozdemircibaris@gmail.com"
            className="text-gray-true-300 hover:text-gray-true-100 hover:scale-110 transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ozdemircibaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Barış Özdemirci's GitHub profile"
            className="text-gray-true-300 hover:text-gray-true-100 hover:scale-110 transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ozdemircibaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Barış Özdemirci's LinkedIn profile"
            className="text-gray-true-300 hover:text-gray-true-100 hover:scale-110 transition-all duration-200"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
