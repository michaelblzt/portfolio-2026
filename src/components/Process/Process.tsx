import styles from './Process.module.css';
import { processSteps, processTools } from '@/lib/data';

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Process↓</h2>
        <div className={styles.steps}>
          {processSteps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.tools}>
          <p className={styles.toolsLabel}>Tools</p>
          <ul className={styles.toolsList}>
            {processTools.map((t) => (
              <li key={t} className={styles.tool}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
