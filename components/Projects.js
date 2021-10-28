import styles from "@/styles/Projects.module.css";
import EduCompanion from "./EduCompanion";

export default function Projects() {
  return (
    <div className={styles.container}>
      <EduCompanion />
      <EduCompanion />
      <EduCompanion />
      <EduCompanion />
    </div>
  );
}
