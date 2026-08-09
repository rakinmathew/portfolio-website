import React from "react";

const Hero = () => {
  return (
    <section className=" min-h-screen flex  items-center md:justify-center pt-24 md:pt-16 px-4 bg-gradient-to-br from-[#1f2f46] via-[#2c3e50] to-[#3498db] text-white text-center">
      <div>
        <h1 className="italic font-light text-3xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 fade-in leading-tight">
          Hey, I am RAKIN K MATHEW
        </h1>
        <p className="text-red-400 font-semibold text-lg sm:text-2xl md:text-3xl lg:text-3xl mb-6 fade-in-delay-1">
          Welcome to My Portfolio Website
        </p>
        <p className="text-white text-sm sm:text-base md:text-base lg:text-lg tracking-wide fade-in-delay-2">
          {" "}
          Web Developer <span className="mx-2 text-gray-400"> | </span>{" "}
          Freelancer <span className="mx-2 text-gray-400"> | </span> Designer
        </p>

        {/* CTA Section for Hire Me Button and Resume Downloader button */}

        <div className="mt-8 gap-4 flex flex-col  md:flex-row  justify-center">
          {/* <a href="#contact" > <button className="text-lg px-6 py-3 max-w-full font-semibold bg-blue-600 hover:bg-blue-700  text-white rounded-lg transform duration-300 hover:scale-105 active:scale-95 cursor-pointer ">Hire Me</button> </a> */}
          {/* <a href="#contact" className="text-lg px-6 py-3 max-w-full font-semibold bg-blue-600 hover:bg-blue-700  text-white rounded-lg transform duration-300 hover:scale-105 active:scale-95 cursor-pointer " > Hire Me </a> */}
          <a
            className="text-lg  px-6 py-3 font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transform  hover:scale-105 active:scale-95 text-white"
            href="/Rakin_Mathew_MERN_Resume.pdf"
            download
          >
            Download Resume
          </a>
          {/* <a href="/Rakin_Mathew_MERN_Resume.pdf" target="_blank"><button className="text-lg max-w-full px-6 py-3 font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transform duration-300 hover:scale-105 active:scale-95 text-white">View Resume</button></a> */}
          <a
            href="/Rakin_Mathew_MERN_Resume.pdf"
            target="_blank"
            className="text-lg  px-6 py-3 font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transform duration-300 hover:scale-105 active:scale-95 text-white"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
