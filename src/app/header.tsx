"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white font-serif rounded-lg shadow-md p-4">
      {/* Header Content */}
      <div className="flex items-center justify-between">
        {/* Brand Name */}
        <h1 className="text-2xl font-bold">CeLestial Beauty</h1>

        {/* Hamburger Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navbar */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center absolute md:static top-16 left-0 w-full bg-black md:bg-transparent z-10 md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-center p-4 md:p-0">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-gray-300 transition">
                PRODUCT
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Add to Cart Button */}
        <button className="hidden md:block bg-white text-black font-medium py-2 px-6 rounded hover:bg-gray-200 transition">
          ADD TO CART
        </button>
      </div>
    </header>
  );
}
