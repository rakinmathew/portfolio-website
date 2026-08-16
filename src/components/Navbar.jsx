import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#1d2d3d]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 whitespace-nowrap text-lg font-semibold tracking-wide text-white transition hover:text-[#7dd3fc] md:text-2xl"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] shadow-[0_8px_24px_rgba(14,165,233,0.35)]">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(125,211,252,0.8),transparent_38%)]" />
              <span className="relative text-[10px] font-black tracking-tight text-white">
                &lt;/&gt;
              </span>
            </span>
            <span>RAKIN K. MATHEW</span>
          </a>

          <ul className="hidden items-center gap-8 text-base font-medium md:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-white/80 transition hover:text-[#7dd3fc]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-md border border-white/10 p-2 text-xl text-white transition hover:border-[#7dd3fc] hover:text-[#7dd3fc] md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <ul className="flex flex-col gap-4 border-t border-white/10 py-5 text-center text-lg md:hidden">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 transition hover:text-[#7dd3fc]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
