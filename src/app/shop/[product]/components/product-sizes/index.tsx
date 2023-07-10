'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';

interface ProductSizesProps {
  sizes: string[];
}

export function ProductSizes({ sizes }: ProductSizesProps) {
  const [activeSize, setActiveSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    setActiveSize(size);
  };

  return (
    <div className={styles.productSizes}>
      <div>
        <span>Select size</span>
        <Link href="#">size guide ›</Link>
      </div>
      <div className={styles.productSizesList}>
        {sizes?.map((size) => (
          <button
            key={size}
            className={`${styles.productSize} ${
              activeSize === size ? styles.productSizeActive : ''
            }`}
            type="button"
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
