import styles from './Blobs.module.css';

export default function Blobs() {
  return (
    <>
      <div className={`${styles.blob} ${styles.blobTopLeft}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blobBottomRight}`} aria-hidden="true" />
    </>
  );
}
