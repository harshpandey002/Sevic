import { useEffect, useState } from "react";
import styles from "@/styles/Works.module.css";
import { Parallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Works() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
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
    },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, staggerDirection: 1 },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "ease" },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Parallax y={[-35, 20]}>
          <div className={styles.heading}>
            <h1>Our Works</h1>
          </div>
        </Parallax>
        <motion.div
          ref={ref}
          variants={test}
          initial="initial"
          animate={animation}
          className={styles.boxes}
        >
          <div className={styles.top}>
            <Box
              variants={item}
              width={194}
              height={334}
              src="https://source.unsplash.com/random/500x401"
            />
            <Box
              variants={item}
              width={247}
              height={251}
              src="https://source.unsplash.com/random/500x411"
            />
            <Box
              variants={item}
              width={193}
              height={334}
              src="https://source.unsplash.com/random/500x410"
            />
            <Box
              variants={item}
              width={248}
              height={251}
              src="https://source.unsplash.com/random/500x421"
            />
          </div>
          <div className={styles.bottom}>
            <Box
              variants={item}
              width={248}
              height={251}
              src="https://source.unsplash.com/random/520x412"
            />
            <Box
              variants={item}
              width={192}
              height={335}
              src="https://source.unsplash.com/random/520x402"
            />
            <Box
              variants={item}
              width={247}
              height={251}
              src="https://source.unsplash.com/random/501x402"
            />
            <Box
              variants={item}
              width={192}
              height={335}
              src="https://source.unsplash.com/random/502x402"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export const Box = ({ width, height, src, variants }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      variants={variants}
      style={{ width, height }}
      className={styles.img}
    >
      <img
        style={{ transform: `translateY(${offsetY * 0.15 - 80}px)` }}
        src={src}
        alt=""
      />
    </motion.div>
  );
};
