import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Articles.module.scss";

const Articles = ({ post }) => {
  const [publishing, setPublishing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // Publish post
  const publishPost = async (postId) => {
    // change publishing state
    setPublishing(true);

    try {
      // Update post
      await fetch("/api/posts", {
        method: "PUT",
        body: postId,
      });

      // reset the publishing state
      setPublishing(false);

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // Stop publishing state
      return setPublishing(false);
    }
  };
  // Delete post
  const deletePost = async (postId) => {
    //change deleting state
    setDeleting(true);

    try {
      // Delete post
      await fetch("/api/posts", {
        method: "DELETE",
        body: postId,
      });

      // reset the deleting state
      setDeleting(false);

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
    }
  };
  return (
    <li className={styles.container}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>{new Date(post.createdAt).toLocaleDateString()}</small>
      {!post.published ? (
        <button type="button" onClick={() => publishPost(post._id)}>
          {publishing ? "Publishing" : "Publish"}
        </button>
      ) : null}
      <button type="button" onClick={() => deletePost(post["_id"])}>
        {deleting ? "Deleting" : "Delete"}
      </button>
    </li>
  );
};

export default Articles;
