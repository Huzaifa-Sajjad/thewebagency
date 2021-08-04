import { useContext } from "react";
import { MouseContext } from "@/context/mouseContext";

function Card({ logo, statement, cover }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  return (
    <div
      className="py-20 px-10 mr-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${cover.url})`,
        backgroundSize: "cover",
        flexShrink: 0,
        width: "33%",
        minHeight: "400px",
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-primary bg-opacity-40 flex justify-center items-center">
        <img src={logo.url} alt="" className="h-20 w-auto  drop-shadow-xl" />
      </div>
    </div>
  );
}

export default Card;
