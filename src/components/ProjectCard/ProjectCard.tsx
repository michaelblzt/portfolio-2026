'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  roleTags?: string;
  roleDescription: string;
  year: string;
  website?: string;
  websiteLabel?: string;
  isPrivate?: boolean;
  image?: string;
  imageAlt?: string;
  accentColor: string;
  useCaseImages: (string | { src: string; bg?: string })[];
}

export default function ProjectCard({
  title,
  description,
  roleTags,
  roleDescription,
  year,
  website,
  websiteLabel = 'Visit website',
  isPrivate,
  image,
  imageAlt,
  accentColor,
  useCaseImages,
}: ProjectCardProps) {
  const coverTitleRef = useRef<HTMLHeadingElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);

  // Scroll-driven cover animation (cross-browser fallback for animation-timeline: view())
  useEffect(() => {
    const cover = coverRef.current;
    if (!cover) return;

    let rafId: number;
    let vh = window.innerHeight;

    const update = () => {
      const rect = cover.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / rect.height));

      const opacity = 0.5 + progress * 0.5;
      const scale = 0.9 + progress * 0.1;
      const translateY = 90 * (1 - progress);
      const radius = `${64 * (1 - progress)}px`;

      cover.style.opacity = String(opacity);
      cover.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      cover.style.borderTopLeftRadius = radius;
      cover.style.borderTopRightRadius = radius;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    const onResize = () => { vh = window.innerHeight; };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Descriptif fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // Images lazy fade-in — observer dédié sur la grille
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImagesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (imagesRef.current) observer.observe(imagesRef.current);
    return () => observer.disconnect();
  }, []);

  // Fit title to cover width
  useEffect(() => {
    const title = coverTitleRef.current;
    const cover = coverRef.current;
    if (!title || !cover) return;

    const fit = () => {
      // Set to 100px then force width: max-content to measure true text width
      // regardless of overflow:hidden on the parent cover.
      title.style.fontSize = '100px';
      title.style.width = 'max-content';
      const textWidth = title.offsetWidth;
      title.style.width = '';
      if (textWidth === 0) return;
      const ratio = cover.offsetWidth / textWidth;
      title.style.fontSize = `${ratio * 100 * 0.9}px`;
    };

    document.fonts.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(cover);
    return () => observer.disconnect();
  }, []);

  return (
    <article className={styles.card}>
      {/* ── Cover ── */}
      <div className={styles.cover} ref={coverRef}>
        {image && (
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className={styles.coverImage}
            sizes="100vw"
          />
        )}
        <div className={styles.overlay} style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), ${accentColor}99` }} />
        <h2 ref={coverTitleRef} className={styles.coverTitle}>{title}</h2>
      </div>

      {/* ── Descriptif + Images (fond cream) ── */}
      <div ref={contentRef} className={`${styles.content} ${contentVisible ? styles.contentVisible : ''}`}>

        <div className={styles.descriptif}>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Year</span>
            <span className={styles.rowValue}>{year}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Description</span>
            <p className={styles.rowText}>{description}</p>
          </div>
          <div className={styles.row}>
            <span className={styles.rowLabel}>Role</span>
            <div className={styles.roleContainer}>
              {roleTags && <span className={styles.roleTags}>{roleTags}</span>}
              <p className={styles.rowText}>{roleDescription}</p>
            </div>
          </div>
          {(website || isPrivate) && (
            <div className={styles.row}>
              <span className={styles.rowLabel}>Website</span>
              {website ? (
                <a
                  href={`https://${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.metaLink}
                >
                  {websiteLabel} <ExternalLink size={12} />
                </a>
              ) : (
                <span className={styles.rowValue}>Private</span>
              )}
            </div>
          )}
        </div>

        {/* ── Images ── */}
        {useCaseImages.length > 0 && (
        <div ref={imagesRef} className={`${styles.images} ${imagesVisible ? styles.imagesVisible : ''}`}>
          {useCaseImages.map((item, i) => {
            const src = typeof item === 'string' ? item : item.src;
            const bg = typeof item === 'string' ? accentColor : (item.bg ?? undefined);
            return (
              <div
                key={src}
                className={styles.imageCell}
                data-nobg={bg === undefined ? 'true' : undefined}
                style={{ background: bg, transitionDelay: `${i * 80}ms` }}
              >
                <Image
                  src={src}
                  alt={`${title} — use case ${i + 1}`}
                  fill
                  className={styles.useCaseImage}
                  sizes="(min-width: 1200px) 33vw, 50vw"
                />
              </div>
            );
          })}
        </div>
        )}

      </div>
    </article>
  );
}
