'use client';

import styles from './ScrollToTop.module.css';

function ArrowDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="12" y1="3" x2="12" y2="18" stroke="#141413" strokeWidth="2.5" strokeLinecap="round"/>
      <polyline points="6,13 12,19 18,13" fill="none" stroke="#141413" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowUp() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="12" y1="21" x2="12" y2="6" stroke="#141413" strokeWidth="2.5" strokeLinecap="round"/>
      <polyline points="6,11 12,5 18,11" fill="none" stroke="#141413" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ScrollToTop() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button className={styles.badge} onClick={scrollToTop} aria-label="Scroll to top">
      <svg className={styles.svgDefault} viewBox="0 0 100 100" width="90" height="90" aria-hidden="true">
        <defs>
          <path id="stt-default" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="11" fontFamily="var(--font-body)" fontWeight="500" fill="#141413" letterSpacing="3.5">
          <textPath href="#stt-default">THANK YOU FOR VISITING •&nbsp;</textPath>
        </text>
      </svg>
      <svg className={styles.svgHover} viewBox="0 0 100 100" width="90" height="90" aria-hidden="true">
        <defs>
          <path id="stt-hover" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text fontSize="11" fontFamily="var(--font-body)" fontWeight="500" fill="#141413" letterSpacing="4">
          <textPath href="#stt-hover">• GO TO TOP OF THE PAGE&nbsp;&nbsp;</textPath>
        </text>
      </svg>
      <span className={styles.arrowDefault} aria-hidden="true"><ArrowDown /></span>
      <span className={styles.arrowHover} aria-hidden="true"><ArrowUp /></span>
    </button>
  );
}
