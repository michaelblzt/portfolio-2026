import styles from './Contact.module.css';
import Button from '../Button/Button';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>

      {/* ── Blob avatar — tout dans un seul SVG, même espace de coordonnées ── */}
      <svg
        className={styles.blob}
        viewBox="-3 -3 85 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-label="Michael Blaizot"
        role="img"
      >
        <defs>
          <clipPath id="blob-clip">
            <path fillRule="evenodd" clipRule="evenodd" d="M43.0325 70C62.8968 70 79 54.33 79 35C79 15.67 62.8968 0 43.0325 0C23.1682 0 0 20.8076 0 40.1376C0 59.4676 23.1682 70 43.0325 70Z" />
          </clipPath>
        </defs>

        {/* Fond jaune — animé */}
        <path className={styles.blobFill} fillRule="evenodd" clipRule="evenodd" d="M43.0325 70C62.8968 70 79 54.33 79 35C79 15.67 62.8968 0 43.0325 0C23.1682 0 0 20.8076 0 40.1376C0 59.4676 23.1682 70 43.0325 70Z" fill="#FFCF56" />

        {/* Photo clippée — même coordonnées que le viewBox */}
        <image
          href="/images/profil.png"
          x="0" y="0" width="79" height="70"
          clipPath="url(#blob-clip)"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Contour blanc — animé */}
        <path className={styles.blobStroke} fillRule="evenodd" clipRule="evenodd" d="M43.0325 70C62.8968 70 79 54.33 79 35C79 15.67 62.8968 0 43.0325 0C23.1682 0 0 20.8076 0 40.1376C0 59.4676 23.1682 70 43.0325 70Z" stroke="white" strokeWidth="3" />
      </svg>

      {/* ── Texte ── */}
      <h2 className={styles.title}>LET&apos;S WORK TOGETHER!</h2>

      <a href="mailto:michael.blzt@gmail.com" className={styles.email}>
        michael.blzt@gmail.com
      </a>

      <Button
        label="Book a discovery call"
        href="https://app.lemcal.com/@michaelblaizot"
        target="_blank"
        variant="primary"
        size="big"
      />

    </section>
  );
}
