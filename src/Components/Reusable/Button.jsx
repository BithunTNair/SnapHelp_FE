import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
       className={`bg-[var(--yellow)] text-white text-md py-2 px-4 rounded hover:bg-gray-800 hover:text-[var(--white)] hover:cursor-pointer transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};