import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
