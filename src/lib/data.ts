export type UseCaseImage = string | { src: string; bg?: string };

export type ProjectData = {
  title: string;
  description: string;
  roleTags?: string;
  roleDescription: string;
  year: string;
  website?: string;
  websiteLabel?: string;
  isPrivate?: boolean;
  image?: string;
  imageAlt?: string;
  accentColor: string;
  useCaseImages: UseCaseImage[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const projects: ProjectData[] = [
  {
    title: 'Perform Assur',
    description:
      "Summer 2023. We created and shipped this refreshing & colorful website to help Perform Assur deliver the best-in class training for insurers with the fantastic Moumz's teams. The idea was to stand out a website that gives another approach to an universe very strict and corporate.",
    roleDescription: 'UI Design, Digital Art Direction',
    year: '2023',
    website: 'www.perform-assur.fr',
    websiteLabel: 'Visit website',
    image: '/images/projects/perform-assur/cover.jpg',
    accentColor: '#9a72ae',
    useCaseImages: [
      '/images/projects/perform-assur/perform_assur-projectImg-01.png',
      '/images/projects/perform-assur/perform_assur-projectImg-02.png',
      '/images/projects/perform-assur/perform_assur-projectImg-03.png',
      '/images/projects/perform-assur/perform_assur-projectImg-04.png',
      '/images/projects/perform-assur/perform_assur-projectImg-05.png',
      '/images/projects/perform-assur/perform_assur-projectImg-06.png',
      '/images/projects/perform-assur/perform_assur-projectImg-07.png',
    ],
  },
  {
    title: 'Masteos',
    description:
      'I had the pleasure to help one of the growing fastest companies around prop tech in France. During 14 months, alongside a fantastic team, we immersed ourselves in the mind of our user to shape web product that helps them to find the best properties to buy and rent.',
    roleTags: 'Info architecture · Product Strategy · Design system · UI Design',
    roleDescription:
      "I co-lead the conception and development of Aphrodite, Masteos' Design System. We used the Atomic method to order our components into logical categories on which developer could base their code on, before deploying it on Storybook. Lead conception/shipping time was divided by around 2 thanks to the use of unified langage between designers and developers.",
    year: '2022 → 2023',
    website: 'www.masteos.com',
    websiteLabel: 'Visit website',
    image: '/images/projects/masteos/cover.jpg',
    accentColor: '#0063f8',
    useCaseImages: [
      '/images/projects/masteos/masteos-projectImg-01.png',
      { src: '/images/projects/masteos/masteos-projectImg-02.png' },
      { src: '/images/projects/masteos/masteos-projectImg-03.jpg' },
      '/images/projects/masteos/masteos-projectImg-04.png',
      '/images/projects/masteos/masteos-projectImg-05.png',
      '/images/projects/masteos/masteos-projectImg-06.jpg',
      { src: '/images/projects/masteos/masteos-projectImg-07.png' },
    ],
  },
  {
    title: 'Groupe Nomblot',
    description:
      'Together with Vivian Sarazin & LaGuild we created this market place for used car with over 1000 references. This site is a compendium of technology builded for reference optimization as well as speed of execution.',
    roleDescription: 'UI Design, Creative Direction, Information architecture',
    year: '2021 → 2023',
    website: 'groupe-nomblot.com',
    websiteLabel: 'Visit website',
    image: '/images/projects/groupe-nomblot/cover.jpg',
    accentColor: '#0285ab',
    useCaseImages: [
      '/images/projects/groupe-nomblot/groupe_nomblot-projectImg-01.png',
      '/images/projects/groupe-nomblot/groupe_nomblot-projectImg-02.png',
      { src: '/images/projects/groupe-nomblot/groupe_nomblot-projectImg-03.png' },
      { src: '/images/projects/groupe-nomblot/groupe_nomblot-projectImg-04.png' },
      { src: '/images/projects/groupe-nomblot/groupe_nomblot-projectImg-05.jpg' },
      '/images/projects/groupe-nomblot/groupe_nomblot-projectImg-06.png',
    ],
  },
  {
    title: 'Tergi',
    description:
      'I closely worked with Agenium to create this CRM for Tergi. As a roadworks company, Tergi carries out sensitive work throughout France. Legislation is very strict when it comes to such works — dozens of authorizations are required, and many different players involved. The aim was to digitize the monitoring of worksite progress, so as to be able to devote all available time to concentrating on the core business: roadworks.',
    roleTags: 'Info architecture · Product Strategy · Creative Direction · UI Design',
    roleDescription:
      'After dozens of discussions with Tergi employees, the choice fell on a modular ERP system comprising 8 interdependent databases and dozens of functionalities: a worksite database with finely-tuned display customization, a standardized worksite creation process, an operations center to manage equipment, an HR universe to track employee unavailabilities, a tablet application for on-site documents, and automated measurement tools.',
    year: '2021 → 2022',
    isPrivate: true,
    image: '/images/projects/tergi/cover.jpg',
    accentColor: '#f07e3a',
    useCaseImages: [
      '/images/projects/tergi/tergi-projectImg-01.png',
      '/images/projects/tergi/tergi-projectImg-02.png',
      '/images/projects/tergi/tergi-projectImg-03.png',
      '/images/projects/tergi/tergi-projectImg-04.png',
      '/images/projects/tergi/tergi-projectImg-05.png',
      { src: '/images/projects/tergi/tergi-projectImg-06.jpg' },
    ],
  },
  {
    title: 'Airbus',
    description:
      "I've been working for Airbus through Capgemini as a UX Designer for the last 5 years. I've conducted a lot of user interviews, from engineer to top management to build monitoring dashboards for a various range of use cases. Whether it's to monitor and investigate an aircraft defect, or to anticipate the duration of the painting stage in the production cycle…",
    roleDescription: 'UX Designer · UI Designer',
    year: 'Since 2018',
    isPrivate: true,
    image: '/images/projects/airbus/cover-3.jpg',
    accentColor: '#030f41',
    useCaseImages: [
      '/images/projects/airbus/airbus-projectImg-01.png',
      '/images/projects/airbus/airbus-projectImg-02.png',
      '/images/projects/airbus/airbus-projectImg-03.png',
      '/images/projects/airbus/airbus-projectImg-04.png',
      '/images/projects/airbus/airbus-projectImg-05.png',
      '/images/projects/airbus/airbus-projectImg-06.png',
    ],
  },
];

export const services: string[] = [
  'UI Design',
  'Design Systems',
  'Interaction Design',
  'Product Discovery',
  'Design Engineering',
  'Prototyping',
];

export const clients: string[] = [
  'Infinit',
  'Masteos',
  'Groupe Nomblot',
  'Ocus',
  'Capgemini',
  'Airbus',
  'Leetchi',
  'Naturamind',
  'PMU.fr',
  'Pechavy',
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understanding the problem space through stakeholder interviews, user research, benchmarking and audits.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'Formulating answers through user & task flows, card sorting, sketching, and defining the experience strategy.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Crafting elegant solutions with colors, typography, structure and geometry. Where the magic happens.',
  },
  {
    number: '04',
    title: 'Systemize',
    description:
      'Delivering a full design system — not just a UI kit. Complete guidelines, documentation, and developer handoff.',
  },
];

export const processTools: string[] = [
  'Figma',
  'Framer',
  'Sketch',
  'Storybook',
  'Zeroheight',
  'Notion',
  'Figjam',
  'Whimsical',
];
