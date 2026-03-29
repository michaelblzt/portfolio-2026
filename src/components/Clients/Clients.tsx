import styles from './Clients.module.css';

const clients = [
  'Infinit', 'Masteos', 'Groupe Nomblot', 'Ocus',
  'Capgemini', 'Airbus', 'Leetchi', 'Naturamind',
  'PMU.fr', 'Pechavy',
];

export default function Clients() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Join this list of happy clients</p>
        <ul className={styles.grid}>
          {clients.map((c) => (
            <li key={c} className={styles.client}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
