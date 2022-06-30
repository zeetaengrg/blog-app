import NextLink from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <h1>LOGO</h1>
      </figure>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <NextLink href="/">
              <a className={styles.link__item}>Home</a>
            </NextLink>
          </li>
          <li className={styles.link}>
            <NextLink href="/add-post">
              <a className={styles.link__item}>Add Post</a>
            </NextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
