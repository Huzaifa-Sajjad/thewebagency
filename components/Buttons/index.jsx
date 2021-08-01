import { MouseContext } from "@/context/mouseContext";
import { useContext } from "react";

export function ButtonPrimary({ children }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  return (
    <button
      onMouseEnter={setHoverCursor}
      onMouseLeave={setNormalCursor}
      className="xs:text-16 md:text-16 lg:text:20 xl:text-22 bg-primary border-2 border-primary text-white w-max px-9 py-3 cursor-none"
    >
      {children}
    </button>
  );
}

export function ButtonOutline({ children }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  return (
    <button
      onMouseEnter={setHoverCursor}
      onMouseLeave={setNormalCursor}
      className="xs:text-16 md:text-16 lg:text:20 xl:text-22 text-primary border-2 border-primary w-max px-9 py-3 hover:bg-primary hover:text-white transition-all duration-500 cursor-none"
    >
      {children}
    </button>
  );
}
