'use client';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python','JavaScript', 'Java', 'HTML', 'C', 'TypeScript', 'GO', 'CSS', 'MongoDB'],
    },
    {
      category: 'Frameworks',
      items: ['React', 'Next.js', 'Tailwind CSS', 'FastAPI' ],
    },
    {
      category: 'Tools & Software',
      items: ['Git', 'Github/Gitlab', 'VSCode', 'Docker', 'WordPress', 'Webflow', 'SharePoint', 'Vercel'],
    },
    {
      category: 'Technical Skills',
      items: [
        'API Development & Integration',
        'Redis',
        'Version Control',
        'UI/UX Design',
        'Responsive Design',
        'Web Development',
        'Logistics',
        'Organization',
        'Time Management',
        'Frontend',
        'Backend',
        'Fullstack',
        'Agile',
        'Prompt Engineering',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 transition-colors duration-300">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 transition-colors duration-300">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm transition-all duration-300 hover:bg-gray-300 hover:text-gray-900 hover:scale-105 border border-gray-300"
                  >
                    {skill}
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

export default Skills; 