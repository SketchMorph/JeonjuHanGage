"use client";
import React from "react";

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium tracking-wide transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-500 shadow",
    secondary:
      "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
    accent:
      "bg-sky-100 text-blue-900 hover:bg-sky-200 focus:ring-sky-300",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
