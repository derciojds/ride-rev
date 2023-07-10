/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import styles from './style.module.scss';

export function ProductDescription({ content }: { content: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.productDescription}>
      <p className={expanded ? styles.expanded : ''}>{content}</p>
      <button
        onClick={() => setExpanded(!expanded)}
        type="button"
        className={styles.expandDesciptionButton}
      >
        read {expanded ? 'less' : 'more'}
      </button>
    </div>
  );
}
