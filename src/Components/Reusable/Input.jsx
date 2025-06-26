import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`border border-gray-300 px-4 py-2 rounded ${className}`}
      {...props}
    />
  );
};