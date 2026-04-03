import styles from './Button.module.css';

type ButtonProps = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  size?: 'big' | 'small';
  target?: '_blank' | '_self';
};

export default function Button({
  label,
  href,
  icon,
  size = 'big',
  target,
}: ButtonProps) {
  const className = [
    styles.btn,
    styles[size],
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={className} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {label}
        {icon && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={className}>
      {label}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
