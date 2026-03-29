import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  year: string;
  website?: string;
  image?: string;
  imageAlt?: string;
}

export default function ProjectCard({
  title,
  description,
  role,
  year,
  website,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.role}>{role}</span>
          <span className={styles.year}>{year}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {website && (
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {website} ↗
          </a>
        )}
      </div>
    </article>
  );
}
