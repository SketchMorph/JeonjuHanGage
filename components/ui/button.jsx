"use client";
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center font-medium rounded-md transition
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${className}`}
    >
      {children}
    </button>
  );
}
