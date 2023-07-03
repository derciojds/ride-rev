import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function BlogPost() {
  return (
    <div className={styles.blogPost}>
      <Link href="/blog">
        <Image
          width={432}
          height={256}
          src="/images/home/why-choose-1.png"
          alt="blog post"
        />
      </Link>
      <div className={styles.blogPostContent}>
        <span className={styles.blogPostDate}>Apr 23</span>
        <Link href="/blog">
          <h4 className={styles.blogPostTitle}>
            How to choose the Right Bike for you
          </h4>
        </Link>
      </div>
    </div>
  );
}
