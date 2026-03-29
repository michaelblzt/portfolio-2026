'use client';

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Logo + status */}
        <div className={styles.left}>
          <a href="#" className={styles.logo} aria-label="Michael Blaizot">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#FFF3D5" />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="var(--font-body)" fontWeight="700" fontSize="13" fill="#141413">mb</text>
            </svg>
          </a>
          <span className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Not available
          </span>
        </div>

        {/* Nav desktop */}
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#process" className={styles.navLink}>Process</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>

        {/* CTA Resume */}
        <a
          href="https://michael-blaizot.notion.site"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resume}
        >
          Resume ↓
        </a>

        {/* Burger mobile */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* Nav mobile */}
      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <a href="#services" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#process" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href="https://michael-blaizot.notion.site"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileResume}
            onClick={() => setMenuOpen(false)}
          >
            Resume ↓
          </a>
        </nav>
      )}
    </header>
  );
}
