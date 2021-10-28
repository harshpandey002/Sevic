import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Works from "@/components/Works";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Works />
    </Layout>
  );
}
