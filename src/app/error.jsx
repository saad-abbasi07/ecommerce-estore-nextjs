"use client";
import React from "react";

export default function Error({ error, reset }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h1>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition"
      >
        Try Again
      </button>
    </div>
  );
}
