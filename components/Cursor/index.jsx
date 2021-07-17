import { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";
import useMousePosition from "./hooks/useMousePosition";

function Cursor() {
  const { x, y } = useMousePosition();
  const { cursorType } = useContext(MouseContext);

  return (
    <div
      className={`custom-cursor ${
        cursorType === "hover" ? "hovered-cursor" : ""
      }`}
      style={{ top: `${y}px`, left: `${x}px` }}
    ></div>
  );
}

export default Cursor;
