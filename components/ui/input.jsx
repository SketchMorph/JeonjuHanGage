"use client";
import React from "react";

export function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  ${className}`}
    />
  );
}
