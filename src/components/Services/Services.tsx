import styles from './Services.module.css';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className={styles.section} data-reveal>
      <p className={styles.label}>Services ↓</p>
      <div className={styles.container}>
        <ul className={styles.list}>
          {services.map((s) => (
            <li key={s} className={styles.item}>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
