import { useEffect, useRef } from "react";

const ICON_SIZE = 80;
const GRID_COLS = 3;
const GRID_ROWS = 3;

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fillGrid = () => {
      container.innerHTML = "";
      const cols = Math.ceil(window.innerWidth / ICON_SIZE) + 1;
      const rows = Math.ceil(window.innerHeight / ICON_SIZE) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const tile = document.createElement("div");
          const randCol = Math.floor(Math.random() * GRID_COLS);
          const randRow = Math.floor(Math.random() * GRID_ROWS);
          const bgPosX = -(randCol * ICON_SIZE);
          const bgPosY = -(randRow * ICON_SIZE);

          tile.style.cssText = `
            position: absolute;
            width: ${ICON_SIZE}px;
            height: ${ICON_SIZE}px;
            left: ${c * ICON_SIZE}px;
            top: ${r * ICON_SIZE}px;
            background-image: url('/images/grid-icons.jpeg');
            background-size: ${ICON_SIZE * GRID_COLS}px ${ICON_SIZE * GRID_ROWS}px;
            background-position: ${bgPosX}px ${bgPosY}px;
            opacity: 0.04;
            transition: opacity 0.6s ease, filter 0.6s ease;
            pointer-events: auto;
          `;

          tile.addEventListener("mouseenter", () => {
            tile.style.opacity = "0.7";
            tile.style.filter = "drop-shadow(0 0 12px hsl(190 100% 50% / 0.8))";
          });
          tile.addEventListener("mouseleave", () => {
            tile.style.opacity = "0.04";
            tile.style.filter = "none";
          });

          container.appendChild(tile);
        }
      }
    };

    fillGrid();
    window.addEventListener("resize", fillGrid);
    return () => window.removeEventListener("resize", fillGrid);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
};

export default InteractiveBackground;
