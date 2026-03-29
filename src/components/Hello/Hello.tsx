import styles from './Hello.module.css';

export default function Hello() {
  return (
    <section className={styles.section}>
      <div className={styles.dotGrid} aria-hidden="true" />

      <h1 className={styles.title}>HELLO.</h1>

    </section>
  );
}
