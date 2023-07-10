/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from './product.module.scss';
import { ProductDescription } from './components/product-description';
import { ProductColors } from './components/product-colors';
import { ProductSizes } from './components/product-sizes';
import { AddToCart } from './components/add-to-cart';

function Product() {
  const colors = [
    { name: 'Red', image: '/images/red.jpg' },
    { name: 'Blue', image: '/images/blue.jpg' },
    { name: 'Green', image: '/images/green.jpg' },
  ];

  return (
    <main className={styles.productContainer}>
      <div className={styles.product}>
        <picture className={styles.productPicture}>
          <Image
            src="/images/products/bike-parts-1.png"
            alt="bike frame"
            width={642}
            height={642}
          />
        </picture>
        <div className={styles.productInfo}>
          <Image
            className={styles.productBrandLogo}
            src="/images/brands/specialized.svg"
            alt="specialized logo"
            width={136}
            height={52}
          />
          <div>
            <h3 className={styles.productTitle}>Status 160 Frame</h3>
            <ProductDescription content="It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatever It's dealer's choice with the Status 160 frameset, but whatevers" />
          </div>
          <div className={styles.productPrice}>
            <span className={styles.productPriceNew}>$1,049.99</span>
            <span className={styles.productPriceOld}>$1,400.00</span>
          </div>
          <ProductColors colors={colors} />
          <ProductSizes sizes={['S1', 'S2', 'S3', 'S4', 'S5']} />
          <AddToCart />
        </div>
      </div>
    </main>
  );
}

export default Product;
