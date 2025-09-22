"use client";
import React from "react";

export function Button({ children, className = "", variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-900 text-white hover:bg-blue-800 shadow-sm hover:shadow-md",
    secondary:
      "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50",
    accent:
      "bg-sky-100 text-sky-800 hover:bg-sky-200",
  };

  return (
    <button {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
