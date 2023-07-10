import Link from 'next/link';
import Image from 'next/image';
import styles from './nav-bar.module.scss';
import Logo from '../../assets/icons/logo.svg';
import { Search, ShoppingCart, User } from 'lucide-react';

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className="wrapper">
        <ul>
          <li className={styles.logo}>
            <Link href="/">
              <Image src={Logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="#">
              <Search />
            </Link>
          </li>
          <li>
            <Link href="#">
              <User />
            </Link>
          </li>
          <li>
            <Link href="#">
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
