import { useEffect, useState, useContext } from "react";
import styles from "@/styles/Header.module.css";
import { Spiral as Hamburger } from "hamburger-react";
import Menu from "./Menu";
import ThemeContext from "@/context/ThemeContext";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const { setCursor } = useContext(ThemeContext);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpen]);

  const mouseOver = () => {
    const style = {
      width: "35px",
      height: "35px",
    };

    const jsx = (
      <div className={styles.test}>
        <p>menu</p>
      </div>
    );

    setCursor({ style, jsx });
  };

  const mouseOverlay = () => {
    const style = {
      width: "35px",
      height: "35px",
    };

    const jsx = (
      <div className={styles.test}>
        <p>Close</p>
      </div>
    );

    setCursor({ style, jsx });
  };

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <h1>Sevic</h1>
        </div>
        <div
          onMouseOver={mouseOver}
          onMouseOut={() => setCursor({})}
          className={styles.menu}
        >
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
        onMouseOver={mouseOverlay}
        onMouseOut={() => setCursor({})}
        className={`${styles.overlay} ${isOpen && `${styles.active}`}`}
      />
      <Menu isOpen={isOpen} />
    </div>
  );
}
