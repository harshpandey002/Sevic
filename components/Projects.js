import styles from "@/styles/Projects.module.css";
import BeyondPinks from "./projects/BeyondPinks";
import EduCompanion from "./projects/EduCompanion";
import Hysea from "./projects/Hysea";

export default function Projects() {
  return (
    <div className={styles.container}>
      <EduCompanion />
      <BeyondPinks />
      <Hysea />
    </div>
  );
}
