import React from "react";

export function Title({ className, children }) {
  return (
    <h1
      className={`xs:text-30 md:text-36 lg:text-44 xl:text-48 text-primary leading-tight font-semibold ${className}`}
    >
      {children}
    </h1>
  );
}

export function H1({ className, children }) {
  return (
    <h1
      className={`xs:text-24 md:text-28 lg:text-32 xl:text-36 text-primary font-semibold md:max-w-25 mb-14 ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children }) {
  return (
    <h2
      className={`xs:text-24 md:text-28 lg:text-32 xl:text-36 text-primary font-semibold ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children }) {
  return (
    <h3
      className={`xs:text-20 md:text-22 lg:text-24 xl:text-26 text-primary font-medium mb-4 ${className}`}
    >
      {children}
    </h3>
  );
}

export function H4({ className, children }) {
  return (
    <h4 className={`text-12 font-semibold text-gray ${className}`}>
      {children}
    </h4>
  );
}

export function Lead({ className, children }) {
  return (
    <p
      className={`xs:text-20 md:text-24 font-light text-gray md:max-w-45 xs:my-6 md:my-14 border-l-4 pl-4 ${className}`}
    >
      {children}
    </p>
  );
}

export function Para({ className, children }) {
  return (
    <p className={`xs:text-14 md:text-18 font-light max-w-45 ${className}`}>
      {children}
    </p>
  );
}
