"use client";

import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Container from "./home/Container";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <header className="w-full bg-white shadow">
      <Container className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-pink-500 pl-4 md:pl-0">
            E-Store
          </h1>

          {/* mobile icon for navbar */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search input */}
        <div className="w-full md:flex-1 md:flex md:justify-center mt-3 md:mt-0">
          <div className="flex w-full sm:w-3/4 md:w-1/2 border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for product"
              className="flex-1 bg-white text-gray-700 outline-none px-3 py-2"
            />
            <button className="bg-pink-500 flex items-center justify-center px-4">
              <FaSearch className="text-white text-lg" />
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 pr-4">
          <Link href="/" className="text-gray-700 hover:text-pink-500">
            Home
          </Link>
          <Link href="/store" className="text-gray-700 hover:text-pink-500">
            Store
          </Link>
          <FaShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-pink-500" />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col mt-3 space-y-3 md:hidden">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-500"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/store"
              className="text-gray-700 hover:text-pink-500"
              onClick={handleLinkClick}
            >
              Store
            </Link>
            <FaShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-pink-500" />
          </div>
        )}
      </Container>
    </header>
  );
}
