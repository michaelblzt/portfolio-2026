'use client';

import styles from './ProjectsIntro.module.css';
import { useTextFit } from '@/hooks/useTextFit';

export default function ProjectsIntro() {
  const { containerRef, textRef } = useTextFit<HTMLElement, HTMLHeadingElement>();

  return (
    <section id="projects" className={styles.section} ref={containerRef}>
      <p className={styles.label}>
        Recent <span className={styles.accent}>projects</span> ↓
      </p>
      <h2 className={styles.title} ref={textRef}>
        <div data-line>BETWEEN <span className={styles.accent}>2021 — 2025</span>,</div>
        <div data-line>I HAD THE OPPORTUNITY TO HELP</div>
        <div data-line>THOSE COMPANIES TACKLING</div>
        <div data-line>THEIR WEB CHALLENGES</div>
      </h2>
    </section>
  );
}
