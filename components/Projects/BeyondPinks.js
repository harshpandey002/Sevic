import { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContext from "@/context/ThemeContext";
import Image from "next/image";
import styles from "@/styles/BeyondPinks.module.css";

export default function BeyondPinks() {
  const { setBackground } = useContext(ThemeContext);

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      // setBackground("#fffef5");
      setBackground("#1f1f1f");
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={ref} className={styles.heading}>
          <h1>Beyond Pinks</h1>
        </div>

        <Box src="https://source.unsplash.com/random/411x311" name="one" />
        <Box src="https://source.unsplash.com/random/400x321" name="two" />
        <Box src="https://source.unsplash.com/random/410x320" name="three" />
        <Box src="https://source.unsplash.com/random/401x312" name="four" />
        <Box src="https://source.unsplash.com/random/410x321" name="five" />
      </div>
    </div>
  );
}

export const Box = ({ src, name }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    // triggerOnce: true,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("initial");
    }
  });

  const test = {
    initial: {
      opacity: 0,
      scale: 0.7,
      y: 100,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, type: "ease" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={test}
      initial="initial"
      animate={animation}
      className={`${styles.img} ${styles[name]} `}
    >
      <Image src={src} layout="fill" alt="" />
    </motion.div>
  );
};
