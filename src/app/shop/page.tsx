import styles from './Shop.module.scss';
import { Product } from '../(components)/product';
import { Filter } from './components/filter';
import { SideBar } from './components/side-bar';

function Shop() {
  return (
    <div className={`wrapper ${styles.shop}`}>
      <SideBar />
      <main className={styles.products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </main>
    </div>
  );
}

export default Shop;
