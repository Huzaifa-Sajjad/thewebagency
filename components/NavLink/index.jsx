import Link from "next/link";
import { useContext } from "react";
import { MouseContext } from "@/context/mouseContext";

function NavLink({ target, isWhite, children }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  return (
    <div
      className={`stroke ${isWhite ? "strokeWhite" : ""}`}
      onMouseEnter={setHoverCursor}
      onMouseLeave={setNormalCursor}
    >
      <Link href={target}>{children}</Link>
    </div>
  );
}

export default NavLink;
