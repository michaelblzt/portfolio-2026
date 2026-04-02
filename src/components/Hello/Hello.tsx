import styles from './Hello.module.css';

const LETTERS = ['H', 'E', 'L', 'L', 'O', '.'];

export default function Hello() {
  return (
    <section className={styles.section}>
      <div className={styles.dotA} aria-hidden="true" />
      <div className={styles.dotB} aria-hidden="true" />
      <div className={styles.dotC} aria-hidden="true" />

      <h1 className={styles.title} aria-label="Hello.">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className={styles.letter}
            style={{ animationDelay: `${i * 100}ms` }}
            aria-hidden="true"
          >
            {letter}
          </span>
        ))}
      </h1>
    </section>
  );
}
