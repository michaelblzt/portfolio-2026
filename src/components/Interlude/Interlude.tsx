import styles from './Interlude.module.css';

export default function Interlude() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>also</p>
        <h2 className={styles.title}>laGuild</h2>
        <p className={styles.description}>
          A collective of senior freelance designers and developers building digital products together.
        </p>
        <a
          href="https://www.laguild.io"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Visit laguild.io ↗
        </a>
      </div>
    </section>
  );
}
