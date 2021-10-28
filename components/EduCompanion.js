import styles from "@/styles/EduCompanion.module.css";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function EduCompanion() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h1>EduCompanion</h1>
        </div>

        <Box src="https://source.unsplash.com/random/400x301" name="one" />
        <Box src="https://source.unsplash.com/random/400x320" name="two" />
        <Box src="https://source.unsplash.com/random/400x310" name="three" />
        <Box src="https://source.unsplash.com/random/400x312" name="four" />
        <Box src="https://source.unsplash.com/random/400x311" name="five" />
      </div>
    </div>
  );
}

export const Box = ({ src, name }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
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
