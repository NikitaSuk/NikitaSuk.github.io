'use client';

const Experience = () => {
  const experiences = [
    {
      title: 'Co-Founder and Lead Engineer',
      company: 'Herein Solutions',
      location: 'Blacksburg, VA',
      period: 'Sep. 2024 - Present',
      description: [
        'Migrated the code base from React Native to Next.js for future mobile integration',
        'Hired, onboarded, and led multiple new teams of varying professions in coordinated efforts for an efficient structure of the company'
      ],
      technologies: ['Next.js', 'React Native', 'Team Leadership']
    },
    {
      title: 'Full Stack Software Engineer Team Lead',
      company: 'Campus Collect',
      location: 'Blacksburg, VA',
      period: 'Jul. 2024 - Sep. 2024',
      description: [
        'Migrated styles from CSS to Tailwind, improving customization and maintainability',
        'Led a team of 7 front-end developers, enhancing task efficiency by 200%',
        'Redesigned the front-end structure, reducing UI rendering times and improving UX',
        'Successfully pitched solutions and features to investors, demonstrating leadership and technical expertise'
      ],
      technologies: ['Tailwind CSS', 'React', 'Team Leadership', 'UX Design']
    },
    {
      title: 'Full Stack Software Engineer Intern',
      company: 'Campus Collect',
      location: 'Blacksburg, VA',
      period: 'Jun. 2024 - Jul. 2024',
      description: [
        'Researched and authored guidelines for RestAPI, OpenAPI, and ReDoc for current and future backend teams',
        'Implemented RestAPI, OpenAPI, and ReDoc documentation to the password, user, and post authorization process',
        'Implemented a Redis system to enhance user interaction speed'
      ],
      technologies: ['RestAPI', 'OpenAPI', 'Redis', 'Documentation']
    },
    {
      title: 'Manager Assistant',
      company: 'Home Spa Outlet',
      location: 'Blacksburg, VA',
      period: 'Nov. 2019 - Dec. 2023',
      description: [
        'Assisted the manager in all aspects of business operations',
        'Answered high volume of customer inquiries',
        'Developed loyal and highly satisfied customer base through proactive management of customer service strategies',
        'Volunteered to help with special projects that varied in degrees of complexity'
      ],
      technologies: ['Customer Service', 'Business Operations', 'Project Management']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 transition-colors duration-300">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 transition-colors duration-300">
                    {experience.company} | {experience.location}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0 font-medium transition-colors duration-300">
                  {experience.period}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 transition-colors duration-300 hover:text-gray-800">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm transition-all duration-300 hover:bg-gray-300 hover:text-gray-900 hover:scale-105 border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 