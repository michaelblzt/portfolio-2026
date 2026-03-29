import styles from './Services.module.css';

const services = [
  'UI DESIGN',
  'MOBILE DESIGN',
  'PRODUCT DISCOVERY',
  'UX INVESTIGATIONS',
  'PROTOTYPING',
  'DESIGN SYSTEM',
  'DESIGN OPS',
  'DATA VIZ',
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <p className={styles.label}>Services ↓</p>
      <div className={styles.container}>
        <ul className={styles.list}>
          {services.map((s) => (
            <li key={s} className={styles.item}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
