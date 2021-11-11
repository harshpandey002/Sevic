import styles from "@/styles/Menu.module.css";

export default function Menu({ isOpen }) {
  return (
    <div className={`${styles.container} ${isOpen && `${styles.active}`}`}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>Menu</p>
          <ul className={styles.nav_links}>
            <li>
              <span name="Work">Work</span>
            </li>
            <li>About</li>
            <li>Services</li>
            <li>Tutorials</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.right}>
          <p>Social</p>
          <ul className={styles.social_links}>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Dribble</li>
          </ul>
        </div>
      </div>
      <div className={styles.email}>
        <p>Get in Touch</p>
        <p className={styles.link}>info@sevic.com</p>
      </div>
    </div>
  );
}
