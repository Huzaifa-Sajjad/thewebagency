import React, { createContext, useState } from "react";

export const MouseContext = createContext({
  cursorType: "",
  setHoverCursor: () => {},
  setNormalCursor: () => {},
});

const MouseContextProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("");

  const hoverCursorHandler = () => {
    setCursorType("hover");
  };

  const normalCursorHandler = () => {
    setCursorType("normal");
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        setHoverCursor: hoverCursorHandler,
        setNormalCursor: normalCursorHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
