import Image from 'next/image';
import styles from './style.module.scss';

export function Product() {
  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <Image
          src="/images/products/bike-parts-1.png"
          alt="bike parts"
          width={220}
          height={220}
        />
      </div>
      <div className={styles.productInfo}>
        <div>
          <span>Bontrager</span>
          <p>Bicycle Helmet</p>
        </div>
        <p className={styles.productPrice}>$24.75</p>
      </div>
      <button className={styles.addToCart} type="button">
        Add to Cart
      </button>
    </div>
  );
}
