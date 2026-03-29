import styles from './ProjectsIntro.module.css';

export default function ProjectsIntro() {
  return (
    <section id="projects" className={styles.section}>
      <p className={styles.label}>
        Recent <span className={styles.accent}>projects</span> ↓
      </p>
      <h2 className={styles.title}>
        BETWEEN <span className={styles.accent}>2021 — 2023</span>,{' '}
        I HAD THE OPPORTUNITY TO HELP{' '}
        THOSE COMPANIES TACKLING{' '}
        THEIR WEB CHALLENGES
      </h2>
    </section>
  );
}
