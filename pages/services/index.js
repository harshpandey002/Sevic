import Layout from "@/components/Layout";
import styles from "@/styles/Services.module.css";

export default function Services() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h3>Our Services</h3>
            <ul className={styles.links}>
              <li>Website Development</li>
              <li>UI/UX Design</li>
              <li>Business Consulting</li>
              <li>Digital Marketing</li>
              <li>Something Else</li>
            </ul>
          </div>
          <div className={styles.right}>{/* <h2>Image Component</h2> */}</div>
        </div>
      </div>
    </Layout>
  );
}
