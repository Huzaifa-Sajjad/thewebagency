import React from "react";

export function Title({ className, large, id, children }) {
  return (
    <h1
      id={id}
      className={`${
        large ? "xs:text-32" : "xs:text-26 "
      } md:text-36 lg:text-44 xl:text-48 text-primary ${className}`}
    >
      {children}
    </h1>
  );
}

export function H1({ className, children }) {
  return (
    <h1
      className={`xs:text-24 md:text-28 lg:text-32 xl:text-36 text-primary font-medium md:max-w-25 ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children }) {
  return (
    <h2
      className={`xs:text-24 md:text-28 lg:text-32 xl:text-36 text-primary font-medium ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children }) {
  return (
    <h3
      className={`xs:text-20 md:text-22 lg:text-24 xl:text-26 text-primary font-medium ${className}`}
    >
      {children}
    </h3>
  );
}

export function H4({ className, children }) {
  return (
    <h4 className={`text-12 font-regular text-gray ${className}`}>
      {children}
    </h4>
  );
}

export function H6({ className, children }) {
  return (
    <h6
      className={`text-12 font-regular text-gray tracking-widest ${className}`}
    >
      {children}
    </h6>
  );
}

export function Lead({ className, children }) {
  return (
    <p
      className={`xs:text-18 md:text-20 lg:text-22 xl:text-24 font-light text-gray md:max-w-55 border-l-4 pl-4 ${className}`}
    >
      {children}
    </p>
  );
}

export function Para({ className, children }) {
  return (
    <p
      className={`xs:text-14 md:text-16 lg:text-16 xl:text-18 font-light max-w-55 ${className}`}
    >
      {children}
    </p>
  );
}
