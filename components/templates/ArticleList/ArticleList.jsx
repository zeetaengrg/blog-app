import { Articles } from "../Articles/Articles";
import styles from "./ArticleList.module.scss";

const ArticleList = ({ posts }) => {
  return (
    <section className={styles.container}>
      <h2>Articles</h2>
      <ul className={styles.list}>
        {posts.length === 0 ? (
          <ul>
            {posts.map((post) => (
              <Articles key={post.id} post={post} />
            ))}
          </ul>
        ) : (
          <p>No Articles Found</p>
        )}
      </ul>
    </section>
  );
};

export default ArticleList;