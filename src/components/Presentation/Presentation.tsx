'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Presentation.module.css';

export default function Presentation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <p className={styles.greeting}>I&apos;m Mika <span className={styles.wave} aria-hidden="true">👋</span></p>
        <h2 className={`${styles.tagline} ${active ? styles.taglineActive : ''}`}>
          A PRODUCT DESIGNER WHO COOKS <span className={styles.accent} style={{ transitionDelay: '0ms' }}>DEAD-SIMPLE</span>,{' '}
          <span className={styles.accent} style={{ transitionDelay: '200ms' }}>ELEGANT</span> &amp; <span className={styles.accent} style={{ transitionDelay: '400ms' }}>USER-FRIENDLY</span> SOLUTIONS TO THE MOST DEMANDING DIGITAL CHALLENGES.
        </h2>
      </div>
      <div className={styles.locationBand}>
        <div className={styles.marqueeTrack}>
          {[...Array(6)].map((_, i) => (
            <span key={i} aria-hidden={i > 0}>
              <span className={styles.marqueeItem}>🇫🇷 Freelance based in Toulouse Area</span>
              <span className={styles.marqueeSep}>⎈</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
