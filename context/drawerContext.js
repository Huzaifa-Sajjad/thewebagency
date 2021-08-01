import React, { createContext, useState } from "react";

export const DrawerContext = createContext({
  open: "",
  openDrawer: () => {},
  closeDrawer: () => {},
  fastClose: () => {},
});

const DrawerContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(true);
  };

  const handleCloseDrawer = (timeline) => {
    timeline.reverse();
    setIsOpen(false);
  };

  const handleFastClose = () => {
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{
        open: isOpen,
        openDrawer: handleOpenDrawer,
        closeDrawer: handleCloseDrawer,
        fastClose: handleFastClose,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContextProvider;
