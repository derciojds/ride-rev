import Image from 'next/image';
import Link from 'next/link';
import { Product } from './(components)/product';
import { Title } from './(components)/section-title';
import { WhyChoose } from './(components)/why-choose';
import ChevronRightIcon from './assets/icons/chevron-right.svg';
import styles from './styles/home.module.scss';
import { Testimonial } from './(components)/testimonial';

export default function Home() {
  return (
    <main>
      <div className={`padding-x ${styles.hero}`}>
        <div className={`wrapper ${styles.heroContent}`}>
          <div>
            <div>
              <h2>
                Upgrade Your Ride with High-Quality
                <br />
                Bike Parts and Customized Bikes.
              </h2>
              <p>
                Upgrade your ride with RideRev®. Shop for high-quality bike
                parts and
                <br /> design your own customized bike today.
              </p>
            </div>
            <Link className={styles.cta} href="#">
              <span>Shop Now</span>
              <Image src={ChevronRightIcon} alt="left" />
            </Link>
          </div>
          {/* <div className={styles.goDown}>
            <svg
              width="16"
              height="25"
              viewBox="0 0 16 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.29289 24.7071C7.68342 25.0976 8.31658 25.0976 8.70711 24.7071L15.0711 18.3431C15.4616 17.9526 15.4616 17.3195 15.0711 16.9289C14.6805 16.5384 14.0474 16.5384 13.6569 16.9289L8 22.5858L2.34315 16.9289C1.95262 16.5384 1.31946 16.5384 0.928932 16.9289C0.538408 17.3195 0.538408 17.9526 0.928932 18.3431L7.29289 24.7071ZM7 0L7 24H9L9 0L7 0Z"
                fill="white"
              />
            </svg>
          </div> */}
        </div>
      </div>
      <section className="wrapper padding-x">
        <Title position="right" sectionNumber={1}>
          Our
          <br />
          Products
        </Title>
        <div className={`padding-x ${styles.products}`}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className={styles.seeAll}>
          <Link href="/products">See All Products</Link>
        </div>
      </section>
      <section className="wrapper padding-x">
        <Title position="left" sectionNumber={2}>
          Why Choose
          <br />
          RideRev®
        </Title>
        <div className={`${styles.whyChoose} padding-x`}>
          <WhyChoose />
          <WhyChoose />
          <WhyChoose />
        </div>
      </section>
      <section className="wrapper padding-x">
        <Title position="right" sectionNumber={3}>
          Testimonials
        </Title>
        <h3 className={`padding-x ${styles.sectionHeading}`}>
          Don&apos;t just take our word for it - hear what our satisfied
          customers have to say about their RideRev experience.
        </h3>
        <div className={`${styles.testimonials}`}>
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </section>
      <section className="wrapper padding-x">
        <Title position="left" sectionNumber={4}>
          From
          <br /> the blog
        </Title>
        <h3
          style={{ marginTop: '4rem' }}
          className={`${styles.sectionHeading}`}
        >
          Check out latest blog post for tips, advice, and inspriration on all
          thhings cycling
        </h3>
        <div className={`padding-x ${styles.blogPosts}`}>
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
        </div>
        <div className={styles.seeAll}>
          <Link href="/blog">See All Blog Posts</Link>
        </div>
      </section>
    </main>
  );
}
