'use client';
import { useState } from 'react';
import styles from './style.module.scss';

export function AddToCart() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.productAddToCart}>
      <div className={styles.productQuantity}>
        <button onClick={() => setQuantity(quantity - 1)} type="button">
          -
        </button>
        <input
          onChange={({ target: { value } }) => {
            setQuantity(Number(value));
          }}
          type="number"
          value={quantity}
          min={1}
          max={100}
        />
        <button onClick={() => setQuantity(quantity + 1)} type="button">
          +
        </button>
      </div>
      <button className={styles.productAddToCartButton} type="button">
        Add to Cart
      </button>
    </div>
  );
}
