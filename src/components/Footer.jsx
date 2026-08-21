import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,152,219,0.18),_transparent_38%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.45)] backdrop-blur-sm md:p-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-[#8ec5ff]">
              Let's Connect
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Have a question or want to work together?
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#3498db] to-[#7dd3fc]" />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/rakinmathew"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#171515] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <FaGithub size={18} className="group-hover:text-[#171515]" />
            </a>

            <a
              href="https://www.linkedin.com/in/rakin-mathew57/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <FaLinkedin size={18} className="group-hover:text-[#0A66C2]" />
            </a>

            <a
              href="https://wa.me/+918943986499"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <FaWhatsapp size={18} className="group-hover:text-[#25D366]" />
            </a>

            <a
              href="mailto:rakinmathewkizhakkekuttu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#EA4335] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <HiOutlineMail size={18} className="group-hover:text-[#EA4335]" />
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  RAKIN K. MATHEW
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-gray-300 md:text-base">
                  Full Stack MERN Developer and Freelancer focused on building
                  responsive, modern, and user-friendly web applications.
                </p>
              </div>

              <div className="md:justify-self-end">
                <h3 className="text-xl font-bold text-white">Quick Links</h3>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="#home"
                    className="text-gray-300 transition hover:text-[#7dd3fc]"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-gray-300 transition hover:text-[#7dd3fc]"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-300 transition hover:text-[#7dd3fc]"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-300 transition hover:text-[#7dd3fc]"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-300 transition hover:text-[#7dd3fc]"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
          <p> © 2026 Rakin K. Mathew</p>
          <p>Built with React.js ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
