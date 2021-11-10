import { useEffect, useState } from "react";
import styles from "@/styles/Header.module.css";
import { Spiral as Hamburger } from "hamburger-react";
import Menu from "./Menu";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <h1>Sevic</h1>
        </div>
        <div className={styles.menu}>
          <Hamburger
            duration={0.8}
            size={26}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </nav>

      <div
        onClick={() => {
          setOpen(false);
        }}
        className={`${styles.overlay} ${isOpen && `${styles.active}`}`}
      />
      <Menu isOpen={isOpen} />
    </div>
  );
}
