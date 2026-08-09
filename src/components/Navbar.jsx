import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [open, setOPen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#2c3e50] text-white z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12 md:h-16">
            {/* Name as Icon */}
            <a
              className="text-xl  md:text-2xl font-medium whitespace-nowrap hover:text-gray-300 text-white"
              href=""
            >
              RAKIN K. MATHEW
            </a>

            {/* Desktop Screen Nav Menu */}
            <ul className=" hidden md:flex gap-8 py-5 text-xl font-medium ">
              <li>
                <a className="hover:text-gray-400" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="hover:text-gray-400" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* Hamburger Icon For Mobile Screen */}

            <button
              onClick={() => setOPen(!open)}
              className="md:hidden text-2xl transition"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Screen nav menu */}

          {open && (
            <ul className="md:hidden flex flex-col gap-4 text-center text-xl py-5 ">
              <li>
                <a
                  onClick={() => setOPen(false)}
                  className="hover:text-gray-400"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOPen(false)}
                  className="hover:text-gray-400"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOPen(false)}
                  className="hover:text-gray-400"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOPen(false)}
                  className="hover:text-gray-400"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOPen(false)}
                  className="hover:text-gray-400"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
