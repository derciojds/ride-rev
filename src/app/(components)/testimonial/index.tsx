import Image from 'next/image';
import styles from './style.module.scss';

export function Testimonial() {
  return (
    <div className={`${styles.testimonial}`}>
      <p className={styles.testimonialText}>
        RideRev® is the best bike shop in the area. I just bought a bike from
        them and they delivered it to me in a timely fashion. I am so happy with
        the product and would recommend it to everyone!
      </p>
      <div className={styles.testimonialAuthor}>
        <Image
          src='/images/users/user-1.png'
          alt='ride-rev testimonial'
          width={50}
          height={50}
        />
        <div>
          <h4>Jane Doe</h4>
          <p>CEO of RideRev</p>
        </div>
      </div>
    </div>
  );
}
