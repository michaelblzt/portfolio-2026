'use client';

import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button className={styles.badge} onClick={scrollToTop} aria-label="Scroll to top">
      <svg className={styles.svgDefault} viewBox="0 0 100 100" width="90" height="90" aria-hidden="true">
        <defs>
          <path id="stt-default" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="11.5" fontFamily="var(--font-body)" fill="#141413" letterSpacing="2">
          <textPath href="#stt-default">THANK YOU FOR VISITING •&nbsp;&nbsp;</textPath>
        </text>
      </svg>
      <svg className={styles.svgHover} viewBox="0 0 100 100" width="90" height="90" aria-hidden="true">
        <defs>
          <path id="stt-hover" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="10.5" fontFamily="var(--font-body)" fill="#141413" letterSpacing="1.5">
          <textPath href="#stt-hover">• GO TO TOP OF THE PAGE&nbsp;&nbsp;</textPath>
        </text>
      </svg>
      <span className={styles.arrowDefault} aria-hidden="true">↓</span>
      <span className={styles.arrowHover} aria-hidden="true">↑</span>
    </button>
  );
}
