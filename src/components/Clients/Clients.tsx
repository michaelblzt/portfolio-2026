import styles from './Clients.module.css';
import { clients } from '@/lib/data';

function SunIcon() {
  return (
    <svg
      className={styles.sun}
      width="56"
      height="56"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      {/* Cercle central — statique */}
      <circle cx="16" cy="16" r="5" fill="#141413" />
      {/* Rayons — rotatifs */}
      <g className={styles.sunRays} stroke="#141413" strokeWidth="2" strokeLinecap="round">
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="16" y1="26" x2="16" y2="30" />
        <line x1="2" y1="16" x2="6" y2="16" />
        <line x1="26" y1="16" x2="30" y2="16" />
        <line x1="5.5" y1="5.5" x2="8.4" y2="8.4" />
        <line x1="23.6" y1="23.6" x2="26.5" y2="26.5" />
        <line x1="26.5" y1="5.5" x2="23.6" y2="8.4" />
        <line x1="8.4" y1="23.6" x2="5.5" y2="26.5" />
      </g>
    </svg>
  );
}

export default function Clients() {
  return (
    <section className={styles.section} data-reveal>
      <div className={styles.inner}>
        <SunIcon />
        <h2 className={styles.title}>Join this list of happy clients</h2>
        <p className={styles.clientList}>{clients.join(', ')}…</p>
      </div>
    </section>
  );
}
