import Link from 'next/link';
import { Product } from './(components)/product';
import { Title } from './(components)/section-title';
import { WhyChoose } from './(components)/why-choose';
import styles from './styles/home.module.scss';
import { Testimonial } from './(components)/testimonial';
import { BlogPost } from './(components)/blog-post';
import { MoveRight } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div className={`padding-x ${styles.hero}`}>
        <div className={`wrapper ${styles.heroContent}`}>
          <div>
            <div>
              <h2>
                Upgrade Your Ride with High-Quality Bike Parts and Customized
                Bikes.
              </h2>
              <p>
                Upgrade your ride with RideRev®. Shop for high-quality bike
                parts and design your own customized bike today.
              </p>
            </div>
            <Link className={styles.cta} href="#">
              <span>Shop Now</span>
              <MoveRight color="black" />
            </Link>
          </div>
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
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
        <div className={styles.seeAll}>
          <Link href="/blog">See All Blog Posts</Link>
        </div>
      </section>
    </main>
  );
}
