'use client';

import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'Wordle Clone',
      description: 'A simple and interactive Wordle clone built with JavaScript, HTML, and CSS. Features real-time feedback, custom word lists, and a responsive design!',
      image: '/wordle.png',
      link: 'https://github.com/NikitaSuk/WordleClone',
      tech: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'EzPass Password Manager',
      description: 'Python-based password manager featuring both a graphical and command-line interface for flexible use. It employs robust encryption via the cryptography library to secure stored passwords.',
      image: '/password-manager.png',
      link: 'https://github.com/NikitaSuk/EzPass',
      tech: ['Python', 'Encryption', 'Tkinter',],
    },
    {
      title: 'College Social Media App',
      description: 'A work-in-progress social media platform designed specifically for college students to connect, share experiences, and build communities.',
      image: '/workinprogress.jpeg',
      link: '#',
      tech: ['React', 'Node.js', 'MongoDB'],
      status: 'In Progress',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 transition-colors duration-300">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.status && (
                  <div className="absolute top-2 right-2 bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm transition-all duration-300 hover:bg-gray-300 hover:text-gray-900 hover:scale-105 border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link !== '#' && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 