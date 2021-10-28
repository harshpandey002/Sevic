import Head from "next/head";
import styles from "@/styles/Layout.module.css";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Sevic | Freelance Agency ",
  description:
    "Leading digital agency focused on UI/UX design. We develop complex websites and elaborate online business services.",
  keywords: "UI/UX, Websites, Branding",
};

export default Layout;
