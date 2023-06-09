import styles from './style.module.scss';
import Link from 'next/link';

import { Logo } from '@/app/assets/Icons';
import { MoveRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className={`padding-x ${styles.footer}`}>
      <div className={`wrapper ${styles.footerWrapper}`}>
        <div className={styles.footerContent}>
          <div>
            <Logo />
            <div className={styles.footerSubscribe}>
              <button type="button">
                <MoveRight />
              </button>
              <input type="email" placeholder="Enter your e-mail" />
            </div>
          </div>
          <div className={styles.footerNav}>
            <nav>
              <ul title="About">
                <li>
                  <Link href="#">Our Story</Link>
                </li>
                <li>
                  <Link href="#">Meet the Team</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
              <ul title="Shop">
                <li>
                  <Link href="#">Bikes</Link>
                </li>
                <li>
                  <Link href="#">Parts</Link>
                </li>
                <li>
                  <Link href="#">Accessories</Link>
                </li>
                <li>
                  <Link href="#">Customization</Link>
                </li>
              </ul>
              <ul title="Customer Service">
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Shipping & Returns</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
              </ul>
              <ul title="Connect With Us">
                <li>
                  <Link href="#">Twitter</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.footerContent}>
          <p>RideRev© 2022 All rights reserved.</p>
          <p>
            Site by <strong>Dercio JdS</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
