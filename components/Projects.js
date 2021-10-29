import styles from "@/styles/Projects.module.css";
import BeyondPinks from "./BeyondPinks";
import EduCompanion from "./EduCompanion";

export default function Projects() {
  return (
    <div className={styles.container}>
      <EduCompanion />
      <BeyondPinks />
      <EduCompanion />
    </div>
  );
}
