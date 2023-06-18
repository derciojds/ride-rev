import Image from 'next/image';
import styles from './style.module.scss';

export function WhyChoose() {
  return (
    <div className={styles.whyChoose}>
      <div className={styles.whyChooseText}>
        <h3>High-Quality Products</h3>
        <p>At RideRev, we&apos;re passionate about cycling and we believe that every ride should be exceptional. That's why we offer only the highest quality bike parts and customized bikes, designed to help you get the most out of every ride.</p>
      </div>
      <picture>
        <Image src='/images/home/why-choose-1.png' alt='why choose' width={540} height={330}/>
      </picture>
    </div>
  )
}