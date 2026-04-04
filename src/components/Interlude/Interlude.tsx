'use client';

import styles from './Interlude.module.css';
import Button from '../Button/Button';
import { ExternalLink } from 'lucide-react';

export default function Interlude() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>
        Quick <span className={styles.accent}>interlude</span> ↓
      </p>
      <h2 className={styles.title}>
        I closely work with <span className={styles.accent}>laGuild&nbsp;—</span> a french based freelance collective that can tackle absolutely anything for your digital needs.
      </h2>
      <Button
        label="Discover laGuild.io"
        icon={<ExternalLink size={16} />}
        href="https://www.laguild.io"
        target="_blank"
        size="big"
      />
    </section>
  );
}
