import React from "react";

function Wrapper({ className, children }) {
  return (
    <div
      className={`xs:max-w-full lg:max-w-4/4 lg:mx-auto xs:py-14 lg:pt-40 lg:pb-20 ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
