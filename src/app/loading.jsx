// src/components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
