import { MouseContext } from "@/context/mouseContext";
import { useContext } from "react";

export const ButtonPrimary = ({
  className,
  children,
  type,
  disabled,
  handleClick,
}) => {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  return (
    <button
      onMouseEnter={setHoverCursor}
      onMouseLeave={setNormalCursor}
      className={`xs:text-16 md:text-16 lg:text:20 xl:text-22 bg-primary border-2 border-primary text-white w-max px-9 py-3 cursor-none hover:bg-white hover:text-black transition-all duration-500 ${className}`}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

ButtonPrimary.defaultProps = {
  type: "button",
  disabled: false,
};

export const ButtonOutline = ({ className, children, type, handleClick }) => {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  return (
    <button
      onMouseEnter={setHoverCursor}
      onMouseLeave={setNormalCursor}
      className={`xs:text-16 md:text-16 lg:text:20 xl:text-22 text-primary border-2 border-primary w-max px-9 py-3 hover:bg-primary hover:text-white transition-all duration-500 cursor-none ${className}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

ButtonOutline.defaultProps = {
  type: "button",
};
