import styles from './ProjectsGroup.module.css';

interface ProjectsGroupProps {
  children: React.ReactNode;
}

export default function ProjectsGroup({ children }: ProjectsGroupProps) {
  return (
    <div
      className={styles.group}
      style={{
        background: 'linear-gradient(to bottom, transparent calc(var(--cover-aspect-height) - 24px), var(--color-cream) var(--cover-aspect-height))',
        borderBottomLeftRadius: 'var(--space-16)',
        borderBottomRightRadius: 'var(--space-16)',
      }}
    >
      {children}
    </div>
  );
}
