import styles from './Services.module.css';

const services = [
  'UI Design',
  'Design Systems',
  'Interaction Design',
  'Product Discovery',
  'Design Engineering',
  'Prototyping',
  'Design System',
];

export default function Services() {
  return (
    <section id="services" className={styles.section} data-reveal>
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
