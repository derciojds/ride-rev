'use client';

import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

interface Color {
  name: string;
  image: string;
}

interface ProductColorsProps {
  colors: Color[];
}

export function ProductColors({ colors }: ProductColorsProps) {
  const [activeColor, setActiveColor] = useState<string | null>(
    colors[0]?.name || null
  );

  const handleColorClick = (colorName: string) => {
    setActiveColor(colorName);
  };

  return (
    <div className={styles.productColors}>
      {colors.map((color) => (
        <button
          key={color.name}
          title={color.name}
          className={`${styles.productColor} ${
            activeColor === color.name ? styles.productColorActive : ''
          }`}
          onClick={() => handleColorClick(color.name)}
          type="button"
        >
          <Image
            alt={`color ${color.name}`}
            src={color.image}
            width={80}
            height={80}
          />
        </button>
      ))}
    </div>
  );
}
