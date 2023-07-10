import styles from './style.module.scss';
import { BlogPost } from '../(components)/blog-post';

function Blog() {
  return (
    <main className={` margin-x  ${styles.posts}`}>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </main>
  );
}

export default Blog;
