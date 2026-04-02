'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import styles from './Header.module.css';
import Button from '../Button/Button';
import { IS_AVAILABLE } from '@/config/availability';

const LogoSVG = () => (
  <svg width="56" height="49" viewBox="0 0 79 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#logo_clip)">
      <path fillRule="evenodd" clipRule="evenodd" d="M43.0325 70C62.8968 70 79 54.33 79 35C79 15.67 62.8968 0 43.0325 0C23.1682 0 0 20.8076 0 40.1376C0 59.4676 23.1682 70 43.0325 70Z" fill="#F0F0E5"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M41.7819 45.8361C44.8321 45.8399 47.2564 45.928 47.2564 46.1303C47.2564 48.5727 33.9389 51.4444 32.1868 51.4444C30.4345 51.4444 29.3161 46.677 29.648 46.3719C29.9761 46.0704 36.0498 45.8537 40.9732 45.837L41.7819 45.8361ZM51.8289 22C54.5383 22.5931 55.3593 23.022 56.8173 25.5927C56.6889 25.7156 56.5226 25.8739 56.3234 26.0703L56.0688 26.3244C55.1697 27.2334 53.7756 28.7682 52.2085 31.0972L52.2202 31.0795L52.2689 31.0115C52.7001 30.4229 53.712 29.5135 55.6066 29.4283L55.8974 29.4218C56.0094 29.4218 57.1004 29.4431 58.2146 30.002C58.2146 30.0016 58.2143 30.0012 58.2143 30.0008L58.2203 29.9889C58.4032 29.7602 62.7674 27.3702 69 27.3702C69 27.4548 66.8964 28.0705 64.6606 28.7749L64.0199 28.9781C61.6699 29.7295 59.381 30.5318 59.4197 30.8764C60.1499 31.6317 60.7041 32.7787 60.7041 34.5234C60.7041 38.0614 56.0658 48.6402 51.6886 48.6402C47.3113 48.6402 47.8165 45.0106 47.8165 44.0524C47.8165 40.3853 54.8831 31.1104 56.5372 31.1104C53.237 30.2639 48.1049 37.3849 48.1049 37.3849C46.2225 40.4376 44.7966 42.8844 44.7966 42.8844C44.3419 42.8844 41.8205 43.1585 41.8205 41.798C41.8205 34.7623 51.3491 22 51.8289 22V22ZM57.9682 31.8148C57.8225 31.8148 47.3935 44.391 50.5792 44.4339C53.8807 44.391 59.11 32.8538 57.9682 31.8148ZM41.5255 23.4021C46.3158 23.4021 47.3445 26.6455 47.2507 26.5577C47.1731 26.485 45.4965 29.989 43.7545 33.6941L43.4374 34.3692C42.2216 36.9599 41.0192 39.5488 40.3492 40.993C40.7101 40.9446 41.344 40.6863 41.4651 40.6863C41.4651 40.6863 41.4152 40.7278 41.3236 40.7999L41.1558 40.9295C40.3671 41.5284 38.2174 43.0256 36.4371 43.0256C34.8238 43.0256 33.7717 40.82 34.4619 38.7878C34.7717 37.8755 36.2221 35.1753 37.7231 32.3717L38.3106 31.2731C39.156 29.6895 39.9721 28.1431 40.5622 26.9381C38.0759 30.9058 31.7358 38.6213 30.7967 40.2755C29.8464 41.8458 29.7352 42.9492 29.1263 42.9492C27.7802 42.9492 25.5626 43.1714 25.5626 40.4316C25.5626 38.98 26.9493 33.6933 28.2664 29.4582C25.7615 34.3024 21.9799 41.0172 20.8211 42.3932C20.2513 42.9265 17.9772 43.0317 17.6539 43.0317C17.3116 43.0317 16 41.921 16 38.4417C16 35.0651 19.9349 24.7786 20.8472 24.7786C25.1244 24.7786 26.6485 27.2482 25.9226 27.9275C25.0761 28.72 22.3196 33.7753 21.264 38.5549C22.2447 37.3349 29.5463 24.3555 30.4027 23.8101C30.4335 23.7806 30.4611 23.7646 30.4849 23.7646C33.1081 23.7646 34.4027 24.256 34.6335 24.3383C36.5085 25.0073 34.897 29.4564 34.6288 30.365C34.5188 30.7225 33.7901 32.8056 32.8861 35.177C35.3229 31.6694 40.1292 24.3912 41.3985 23.5009C41.452 23.4369 41.4952 23.4021 41.5255 23.4021V23.4021Z" fill="#141413"/>
    </g>
    <defs>
      <clipPath id="logo_clip">
        <rect width="79" height="70" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 809) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > 120) {
        setHidden(y > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setHidden(false), 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Fond pleine page — fade in/out derrière le pill */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      >
        <div className={styles.overlayGlow} />
      </div>

      {/* Wrapper — pill toujours présent, se cache au scroll */}
      <div className={`${styles.wrapper} ${hidden ? styles.wrapperHidden : ''}`}>

        {/* Pill — taille constante, jamais modifiée */}
        <header
          className={styles.header}
          style={(!menuOpen && scrolled) ? {
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            background: 'rgba(0, 0, 0, 0.25)',
            borderColor: 'rgba(255, 243, 213, 0.15)',
          } : undefined}
        >
          <div className={styles.left}>
            <a href="#" className={styles.logo} aria-label="Michael Blaizot">
              <LogoSVG />
            </a>
            <span className={`${styles.status} ${menuOpen ? styles.statusHidden : ''}`}>
              <span className={`${styles.dot} ${IS_AVAILABLE ? styles.dotAvailable : ''}`} aria-hidden="true" />
              {IS_AVAILABLE ? 'Available for work' : 'Not available'}
            </span>
          </div>

          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          <div className={styles.resumeDesktop}>
            <Button
              label="Resume"
              href="https://michael-blaizot.notion.site/Portfolio-Micha-l-Blaizot-95e549248eb64ea28aa7798c15491415?source=copy_link"
              target="_blank"
              variant="primary"
              size="small"
              icon={<ExternalLink size={14} />}
            />
          </div>

          {/* Burger / X — swap en place, même position */}
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.burgerIcon} ${menuOpen ? styles.burgerIconHidden : ''}`}>
              <Menu size={22} color="var(--color-cream)" />
            </span>
            <span className={`${styles.burgerIcon} ${menuOpen ? '' : styles.burgerIconHidden}`}>
              <X size={22} color="var(--color-cream)" />
            </span>
          </button>
        </header>

        {/* Nav items — fade in sous le pill, dans le flux du wrapper */}
        <div className={`${styles.navContent} ${menuOpen ? styles.navContentVisible : ''}`}>
          <div className={styles.availabilityBar}>
            <span className={`${styles.dot} ${IS_AVAILABLE ? styles.dotAvailable : ''}`} aria-hidden="true" />
            <span className={styles.availabilityText}>
              {IS_AVAILABLE ? 'Available for freelance' : 'Not available'}
            </span>
          </div>
          <nav className={styles.dropdownNav} aria-label="Mobile navigation">
            <a href="#services" className={styles.dropdownNavLink} onClick={closeMenu}>Services</a>
            <a href="#projects" className={styles.dropdownNavLink} onClick={closeMenu}>Projects</a>
            <a href="#contact" className={styles.dropdownNavLink} onClick={closeMenu}>Contact</a>
            <a
              href="https://michael-blaizot.notion.site/Portfolio-Micha-l-Blaizot-95e549248eb64ea28aa7798c15491415?source=copy_link"
              className={`${styles.dropdownNavLink} ${styles.dropdownNavResume}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Resume <ExternalLink size={14} />
            </a>
          </nav>
        </div>

      </div>
    </>
  );
}
