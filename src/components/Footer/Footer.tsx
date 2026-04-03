import styles from './Footer.module.css';

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.904-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm7.92 5.572a10.16 10.16 0 0 1 2.264 5.775c-.33-.067-3.63-.738-6.95-.32-.075-.183-.146-.37-.224-.557-.207-.506-.43-1.013-.661-1.507 3.676-1.496 5.353-3.651 5.571-3.391zM12 1.827c2.503 0 4.8.918 6.546 2.426-.185.214-1.7 2.233-5.254 3.56C11.47 5.042 9.61 3.2 9.31 2.903A10.21 10.21 0 0 1 12 1.827zm-4.337.886c.29.285 2.17 2.134 3.993 4.892-5.036 1.338-9.481 1.313-9.94 1.307A10.2 10.2 0 0 1 7.663 2.713zm-5.833 9.3v-.26c.445.01 5.638.074 11.01-1.528.308.6.6 1.208.873 1.818-.138.038-.278.08-.413.126-5.553 1.793-8.5 6.697-8.748 7.121A10.149 10.149 0 0 1 1.83 12.013zm10.17 10.16a10.148 10.148 0 0 1-6.258-2.143c.208-.41 2.567-4.963 8.683-7.096l.073-.025c1.553 4.036 2.19 7.42 2.356 8.36a10.127 10.127 0 0 1-4.854 1.904zm6.606-2.776c-.12-.715-.706-3.944-2.155-7.922 3.124-.5 5.863.32 6.208.426a10.198 10.198 0 0 1-4.053 7.496z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} data-reveal>
      <div className={styles.inner}>
        <div className={styles.socials}>
          <a href="https://x.com/michaelblzt" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={styles.socialLink}>
            <XIcon />
          </a>
          <a href="https://www.linkedin.com/in/michaelblaizot" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
            <LinkedinIcon />
          </a>
          <a href="https://dribbble.com/michaelblaizot" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className={styles.socialLink}>
            <DribbbleIcon />
          </a>
        </div>
        <p className={styles.copy}>Michael Blaizot — © Portfolio Personnel <span className={styles.year}>{year}</span></p>
      </div>
    </footer>
  );
}
