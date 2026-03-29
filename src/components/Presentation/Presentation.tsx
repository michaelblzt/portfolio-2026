import styles from './Presentation.module.css';

export default function Presentation() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.greeting}>I&apos;m Mika 👋</p>
        <h2 className={styles.tagline}>
          A PRODUCT DESIGNER<br />
          WHO COOKS <span className={styles.accent}>DEAD-SIMPLE</span>,<br />
          <span className={styles.accent}>ELEGANT</span> &amp; <span className={styles.accent}>USER-FRIENDLY</span> SOLUTIONS<br />
          TO THE MOST DEMANDING<br />
          DIGITAL CHALLENGES.
        </h2>
      </div>
      <div className={styles.locationBand}>
        <p className={styles.location}>🇫🇷 FREELANCE BASED IN TOULOUSE AREA</p>
      </div>
    </section>
  );
}
