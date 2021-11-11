import styles from "@/styles/Cursor.module.css";
import { useEffect, useRef } from "react";
import { lerp, getMousePos, getSiblings } from "@/util/util";

export default function Cursor({ cursor }) {
  let mouse = { x: 0, y: 0 };

  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", getMouse);

    return () => {
      window.removeEventListener("mousemove", getMouse);
    };
  });

  const getMouse = (e) => {
    mouse = getMousePos(e);
    console.log(mouse);
    // console.log(ref.current);
    ref.current.style.top = mouse.y + "px";
    ref.current.style.left = mouse.x + "px";
  };

  return (
    <div
      ref={ref}
      style={cursor.style}
      className={`${styles.cursor} ${cursor.blend && `${styles.blend}`}`}
    >
      {cursor.jsx}
    </div>
  );
}
