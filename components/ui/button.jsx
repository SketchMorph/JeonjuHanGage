"use client";
import React from "react";
import clsx from "clsx";

export function Button({ children, variant = "primary", className, ...props }) {
  const baseStyles =
    "px-5 py-2 rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-400",
    accent:
      "bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-500",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
