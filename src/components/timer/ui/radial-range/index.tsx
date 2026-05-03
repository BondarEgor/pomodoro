import { Row } from "@shared/row";
import { Timer } from "../..";
import s from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

export const RadialRange = () => {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState(0);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;

    const rect = outerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const radians = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    let degrees = radians * (180 / Math.PI) + 90;
    degrees = (degrees + 360) % 360;

    setRotation(degrees);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className={s.outerRange} ref={outerRef}>
      <Row
        flex={1}
        alignItems="center"
        justifyItems="center"
        className={s.innerRange}
      >
        <Timer value={rotation / 6} />
      </Row>

      <button
        onMouseDown={handleMouseDown}
        ref={btnRef}
        style={{
          transform: `rotateZ(${rotation}deg)`,
        }}
        className={s.button}
      />
    </div>
  );
};
