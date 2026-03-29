import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understanding the problem space through stakeholder interviews, user research, benchmarking and audits.',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Formulating answers through user & task flows, card sorting, sketching, and defining the experience strategy.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Crafting elegant solutions with colors, typography, structure and geometry. Where the magic happens.',
  },
  {
    number: '04',
    title: 'Systemize',
    description: 'Delivering a full design system — not just a UI kit. Complete guidelines, documentation, and developer handoff.',
  },
];

const tools = ['Figma', 'Framer', 'Sketch', 'Storybook', 'Zeroheight', 'Notion', 'Figjam', 'Whimsical'];

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Process↓</h2>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.tools}>
          <p className={styles.toolsLabel}>Tools</p>
          <ul className={styles.toolsList}>
            {tools.map((t) => (
              <li key={t} className={styles.tool}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
