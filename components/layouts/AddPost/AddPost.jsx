import { useState } from "react";
import styles from "./AddPost.module.scss";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();

    // Reset error and message
    setError("");
    setMessage("");

    // Check if title and body are empty
    if (!title || !body) {
      setError("All fields are required");
      return;
    }

    // post structure
    let post = {
      title,
      body,
      published: false,
      createdAt: new Date().toISOString(),
    };

    // save the post
    let response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });

    // get the data
    let data = await response.json();

    if (data.success) {
      // reset the fields
      setTitle("");
      setBody("");
      // set the message
      return setMessage(data.message);
    } else {
      // set the error
      return setError(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add Post</h2>
      <form onSubmit={handlePost}>
        {error ? <p className={styles.error}>{error}</p> : null}
        {message ? <p className={styles.message}>{message}</p> : null}
        <div className={styles.form__control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
        </div>
        <div className={styles.form__control}>
          <label htmlFor="body">Content</label>
          <textarea
            name="body"
            id="body"
            onChange={(e) => setBody(e.target.value)}
            value={body}
            placeholder="Write Content"
            rows="15"
          />
        </div>
        <button className={styles.btn} type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
