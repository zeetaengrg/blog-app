import styles from "./Articles.module.scss";

const Articles = ({ post }) => {
  return (
    <li className={styles.container}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>{new Date(post.createdAt).toLocaleDateString()}</small>
      <button>{"Publish"}</button>
      <button>{"Delete"}</button>
    </li>
  );
};

export default Articles;
