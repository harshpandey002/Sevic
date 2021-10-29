import styles from "@/styles/Projects.module.css";
import BeyondPinks from "./Projects/BeyondPinks";
import EduCompanion from "./Projects/EduCompanion";
import Hysea from "./Projects/Hysea";

export default function Projects() {
  return (
    <div className={styles.container}>
      <EduCompanion />
      <BeyondPinks />
      <Hysea />
    </div>
  );
}
