'use client';

import styles from './Interlude.module.css';
import Button from '../Button/Button';
import { useTextFit } from '@/hooks/useTextFit';
import { ExternalLink } from 'lucide-react';

export default function Interlude() {
  const { containerRef, textRef } = useTextFit<HTMLElement, HTMLHeadingElement>();

  return (
    <section className={styles.section} ref={containerRef}>
      <p className={styles.label}>
        Quick <span className={styles.accent}>interlude</span> ↓
      </p>
      <h2 className={styles.title} ref={textRef}>
        <div data-line>I closely work with <span className={styles.accent}>laGuild</span> —</div>
        <div data-line>a french based freelance collective</div>
        <div data-line>that can tackle absolutely anything</div>
        <div data-line>for your digital needs.</div>
      </h2>
      <Button
        label="Discover laGuild.io"
        icon={<ExternalLink size={16} />}
        href="https://www.laguild.io"
        target="_blank"
        variant="primary"
        size="big"
      />
    </section>
  );
}
