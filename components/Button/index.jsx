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
      className={`xs:text-16 md:text-16 lg:text:20 xl:text-22 bg-primary border border-primary text-white w-max px-12 py-3 rounded-sm cursor-none hover:bg-white hover:text-black transition-all duration-500 ${className}`}
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
      className={`xs:text-16 md:text-16 lg:text:20 xl:text-22 text-primary border border-primary w-max px-12 py-3 rounded-sm cursor-none hover:bg-primary hover:text-white transition-all duration-500 cursor-none ${className}`}
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

export const CardButton = ({
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
      className={`bg-primary text-white py-2 px-4 w-full rounded-sm cursor-none hover:bg-white hover:text-black hover:border transition-all duration-500 ${className}`}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export const HeaderButton = ({
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
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={`xs:text-16 bg-primary border border-primary text-white w-max py-3 px-10 rounded-sm cursor-none hover:bg-white hover:text-black transition-all duration-500 ${className}`}
    >
      {children}
    </button>
  );
};
