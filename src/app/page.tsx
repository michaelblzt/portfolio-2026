import Header from '@/components/Header/Header';
import Hello from '@/components/Hello/Hello';
import Presentation from '@/components/Presentation/Presentation';
import Services from '@/components/Services/Services';
import ProjectsIntro from '@/components/ProjectsIntro/ProjectsIntro';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Interlude from '@/components/Interlude/Interlude';
import Process from '@/components/Process/Process';
import Clients from '@/components/Clients/Clients';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

const projects = [
  {
    title: 'Perform Assur',
    description: 'Redesign of the insurance platform for a better user experience and conversion.',
    role: 'UX / UI Design',
    year: '2023',
    website: 'www.perform-assur.fr',
  },
  {
    title: 'Masteos',
    description: 'End-to-end product design for a real estate investment platform.',
    role: 'Product Design',
    year: '2022',
    website: 'www.masteos.com',
  },
  {
    title: 'Groupe Nomblot',
    description: 'Brand and digital presence redesign for a family-owned French company.',
    role: 'UX / UI Design',
    year: '2022',
    website: 'groupe-nomblot.com',
  },
  {
    title: 'Tergi',
    description: 'Design system and UI redesign for an enterprise SaaS product.',
    role: 'Design System',
    year: '2021',
  },
  {
    title: 'Airbus',
    description: 'UX strategy and interface design for internal tooling at scale.',
    role: 'UX Strategy',
    year: '2021',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hello />
        <Presentation />
        <Services />
        <ProjectsIntro />
        <ProjectCard {...projects[0]} />
        <ProjectCard {...projects[1]} />
        <Interlude />
        <ProjectCard {...projects[2]} />
        <ProjectCard {...projects[3]} />
        <ProjectCard {...projects[4]} />
        <Process />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
