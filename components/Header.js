import { useState } from "react";
import styles from "@/styles/Header.module.css";
import { Spiral as Hamburger } from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <h1>Sevic</h1>
        </div>
        <div>
          <Hamburger
            duration={0.8}
            size={24}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </nav>
    </div>
  );
}
