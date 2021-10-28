import styles from "@/styles/Works.module.css";
import { Parallax } from "react-scroll-parallax";

export default function Works() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Parallax y={[-35, 20]}>
          <div className={styles.heading}>
            <h1>Our Works</h1>
          </div>
        </Parallax>
        <div className={styles.boxes}>
          <div className={styles.top}>
            <Box
              width={194}
              height={334}
              src="https://source.unsplash.com/random/500x401"
            />
            <Box
              width={247}
              height={251}
              src="https://source.unsplash.com/random/500x411"
            />
            <Box
              width={193}
              height={334}
              src="https://source.unsplash.com/random/500x410"
            />
            <Box
              width={248}
              height={251}
              src="https://source.unsplash.com/random/500x421"
            />
          </div>
          <div className={styles.bottom}>
            <Box
              width={248}
              height={251}
              src="https://source.unsplash.com/random/520x412"
            />
            <Box
              width={192}
              height={335}
              src="https://source.unsplash.com/random/520x402"
            />
            <Box
              width={247}
              height={251}
              src="https://source.unsplash.com/random/501x402"
            />
            <Box
              width={192}
              height={335}
              src="https://source.unsplash.com/random/502x402"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Box = ({ width, height, src }) => {
  return (
    <div style={{ width, height }} className={styles.img}>
      <img src={src} alt="" />
    </div>
  );
};
