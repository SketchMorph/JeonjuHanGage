"use client";
import React from "react";

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium tracking-wide transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-exhibition-blue text-white hover:bg-blue-800 focus:ring-exhibition-blue shadow-soft",
    secondary:
      "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 focus:ring-gray-400",
    accent:
      "bg-exhibition-sky text-exhibition-blue hover:bg-exhibition-accent focus:ring-exhibition-accent",
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
