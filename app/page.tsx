import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ResearchProject } from '@/components/ResearchProject';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CurrentlyBuilding } from '@/components/CurrentlyBuilding';

export default function Page() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      <Hero />

      <CurrentlyBuilding />

      <Projects />

      <ResearchProject />

      <About />

      <Experience />

      <Skills />

      <Education />

      <Contact />

      <Footer />
    </main>
  );
}
