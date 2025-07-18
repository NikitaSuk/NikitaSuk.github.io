'use client';

const About = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 transition-colors duration-300">
          About
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-300">
            <p className="text-lg text-gray-600 leading-relaxed transition-colors duration-300">
            Hello! I'm Nikita Sukharevich, a first-generation college student in my family and a third-year student with junior standing in Computer Science at Virginia Tech. With a 3.56 overall GPA and a 3.63 in major GPA and multiple Dean's List recognitions, I blend academic achievement with hands-on engineering experience. I'm passionate about building practical solutions, including a thriving Discord community of 800+ members powered by custom web scraping bots. My technical expertise spans front-end and back-end development, working with React, Tailwind CSS, C, and Python to create efficient and impactful applications.
              <br /><br />
              I'm currently seeking summer 2026 opportunities and am always eager to connect with developers, industry professionals, and tech enthusiasts. Whether it's exchanging ideas, discussing emerging technologies, or collaborating on meaningful projects, I'm excited to contribute and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 