import Header from '@/components/Header/Header';
import Hello from '@/components/Hello/Hello';
import Presentation from '@/components/Presentation/Presentation';
import Services from '@/components/Services/Services';
import ProjectsIntro from '@/components/ProjectsIntro/ProjectsIntro';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import ProjectsGroup from '@/components/ProjectsGroup/ProjectsGroup';
import Interlude from '@/components/Interlude/Interlude';
import Clients from '@/components/Clients/Clients';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { projects } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hello />
        <Presentation />
        <Services />
        <ProjectsIntro />
        <ProjectsGroup>
          <ProjectCard {...projects[0]} priority />
          <ProjectCard {...projects[1]} />
        </ProjectsGroup>
        <Interlude />
        <ProjectsGroup>
          <ProjectCard {...projects[2]} />
          <ProjectCard {...projects[3]} />
          <ProjectCard {...projects[4]} />
        </ProjectsGroup>
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
