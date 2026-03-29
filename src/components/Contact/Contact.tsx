import Image from 'next/image';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>Let&apos;s work<br />together.</h2>
          <div className={styles.actions}>
            <a
              href="https://app.lemcal.com/@michaelblaizot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Book a discovery call
            </a>
            <a href="mailto:michael.blzt@gmail.com" className={styles.email}>
              michael.blzt@gmail.com
            </a>
          </div>
          <div className={styles.socials}>
            <a href="https://twitter.com/MichaelBlaizot" target="_blank" rel="noopener noreferrer" className={styles.social}>Twitter</a>
            <a href="https://www.linkedin.com/in/michael-blaizot/" target="_blank" rel="noopener noreferrer" className={styles.social}>LinkedIn</a>
            <a href="https://dribbble.com/MichaelBlaizot" target="_blank" rel="noopener noreferrer" className={styles.social}>Dribbble</a>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image
            src="/images/portrait.jpg"
            alt="Michael Blaizot"
            fill
            className={styles.portraitImg}
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
