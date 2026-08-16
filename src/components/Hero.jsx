import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#1f2f46] via-[#2c3e50] to-[#3498db] px-4 pt-24 text-center text-white md:pt-16"
    >
      <div className="max-w-5xl">
        <h1 className="mb-6 text-4xl font-light italic leading-tight sm:text-5xl md:text-6xl">
          Hey, I am <span className="font-semibold">RAKIN K MATHEW</span>
        </h1>

        <p className="mb-6 text-2xl font-semibold text-[#ff6b6b] md:text-4xl">
          Welcome to My Portfolio Website
        </p>

        <p className="text-base tracking-wide text-white/90 sm:text-lg md:text-xl">
          Web Developer <span className="mx-2 text-gray-300">|</span>
          Freelancer <span className="mx-2 text-gray-300">|</span>
          Designer
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
          <a
            href="/Rakin_Mathew_MERN_Resume.pdf"
            download
            className="rounded-xl bg-[#2563eb] px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-blue-900/30 transition duration-300 hover:-translate-y-1 hover:bg-[#1d4ed8]"
          >
            Download Resume
          </a>

          <a
            href="/Rakin_Mathew_MERN_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
