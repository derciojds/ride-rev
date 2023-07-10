/* eslint-disable react/no-unescaped-entities */
import styles from './style.module.scss';
import { BlogPost } from '@/app/(components)/blog-post';

function Post() {
  const postImage = '/images/blog-posts/01.jpg';

  return (
    <div className={`wrapper ${styles.post}`}>
      <header className={styles.postHeader}>
        <div className={styles.postTitle}>
          <h1>5 Essential Bike Maintenance Tips Every Cyclist Should Know</h1>
          <div className={styles.postDetails}>
            <span>by Jonathan Austin</span>
            <span>2 days ago</span>
          </div>
        </div>
        <div
          className={styles.postImage}
          style={{ backgroundImage: `url(${postImage})` }}
        ></div>
      </header>
      <div className={styles.postContent}>
        <aside className={styles.relatedPosts}>
          <h4>don't miss a thing</h4>
          <div className={styles.posts}>
            <BlogPost />
            <BlogPost />
          </div>
        </aside>
        <main>
          <p>
            upgrade your ride with RideRev®. Shop for high-quality bike parts
            and design your own customized bike today.I've been a loyal RideRev
            customer for years, and they never fail to impress me with their
            amazing selection and fast shipping. I recently ordered a new set of
            wheels and they arrived.
          </p>
          <p>
            The quality is top-notch and I know they'll last me for years to
            come.I've been a loyal RideRev customer for years, and they never
            fail to impress me with their amazing selection and fast shipping. I
            recently ordered a new set of wheels and they arrived in just a few
            days.
          </p>
          <p>
            The quality is top-notch and I know they'll last me for years to
            come.I've been a loyal RideRev customer for years, and they never
            fail to impress me with their amazing selection and fast shipping. I
            recently ordered a new set of wheels and they arrived in just a few
            days. The quality is top-notch and I know they'll last me for years
            to come.I've been a loyal RideRev customer for years, and they never
            fail to impress me with their amazing selection and fast shipping.
          </p>
          <p>
            I recently ordered a new set of wheels and they arrived in just a
            few days. The quality is top-notch and I know they'll last me for
            years to come.I've been a loyal RideRev customer for years, and they
            never fail to impress me with their amazing selection and fast
            shipping. I recently ordered a new set of wheels and they arrived in
            just a few days. The quality is top-notch and I know they'll last me
            for years to come.I've been a loyal RideRev customer for years, and
            they never fail to impress me with their amazing selection and fast
            shipping. I recently ordered a new set of wheels and they arrived in
            just a few days. The quality is top-notch and I know they'll last me
            for years to come.
          </p>
          <h3>The quality is top-notch</h3>
          <p>
            They'll last me for years to come.I've been a loyal RideRev customer
            for years, and they never fail to impress me with their amazing
            selection and fast shipping.
          </p>
          <p>
            I recently ordered a new set of wheels and they arrived in just a
            few days. The quality is top-notch and I know they'll last me for
            years to come.I've been a loyal RideRev customer for years, and they
            never fail to impress me with their amazing selection and fast
            shipping.
          </p>
          <p>
            I recently ordered a new set of wheels and they arrived in just a
            few days. The quality is top-notch and I know they'll last me for
            years to come.I've been a loyal RideRev customer for years, and they
            never fail to impress me with their amazing selection and fast
            shipping.
          </p>
          <p>
            I recently ordered a new set of wheels and they arrived in just a
            few days. The quality is top-notch and I know they'll last me for
            years to come.I've been a loyal RideRev customer for years, and they
            never fail to impress me with their amazing selection and fast
            shipping. I recently ordered a new set of wheels and they arrived in
            just a few days. The quality is top-notch and I know they'll last me
            for years to come.
          </p>
        </main>
      </div>
    </div>
  );
}

export default Post;
