import Image from 'next/image';
import { Title } from '../(components)/title';
import styles from './style.module.scss';

export default function About() {
  return (
    <main className={`wrapper ${styles.about}`}>
      <Title position="left" sectionNumber={1}>
        About Us
      </Title>
      <div className={styles.sectionsWrapper}>
        <section>
          <h3>Introduction</h3>
          <div>
            <p>
              We are passionate about providing high-quality, modern bike parts
              and customized bikes for cycling enthusiasts. Our goal is to offer
              exceptional customer service and an unparalleled shopping
              experience for our customers.
            </p>
          </div>
        </section>
        <section>
          <h3>Our History</h3>
          <div>
            <p>
              Founded in 1995, RideRev started as a small bike shop in
              [Location]. Since then, we have grown to become a trusted name in
              the cycling industry, offering a wide range of products and
              services for cyclists of all levels. Along the way, we have faced
              many challenges, but our dedication to quality and customer
              satisfaction has remained unwavering.
            </p>
          </div>
        </section>
        <section>
          <h3>Our Future</h3>
          <div>
            <p>
              As we look to the future, we are excited to continue growing and
              evolving as a brand. We are always exploring new products,
              services, and initiatives that will allow us to better serve our
              customers and offer exceptional cycling experiences.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
