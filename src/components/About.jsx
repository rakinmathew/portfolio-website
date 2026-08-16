import React from "react";
import rakin_aboutusimage from "../assets/rakin_aboutusimage.png";

const About = () => {
  return (
    <section id="about" className="bg-slate-50 px-4 py-20 text-gray-800">
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
          About Me
        </p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-5xl">
          Building clean, modern web experiences
        </h2>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#3498db] to-[#2563eb]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
        <div className="flex w-full justify-center md:w-1/3">
          <div className="overflow-hidden rounded-[28px] border border-blue-100 bg-white p-3 shadow-[0_20px_60px_rgba(37,99,235,0.15)]">
            <img
              src={rakin_aboutusimage}
              alt="Rakin's Profile Picture"
              className="h-52 w-52 object-cover object-center rounded-[20px] md:h-72 md:w-72"
            />
          </div>
        </div>

        <div className="w-full text-gray-900 md:w-2/3 md:text-lg">
          <p className="mb-4 leading-8 text-gray-700">
            Hello! I'm RAKIN K MATHEW, a passionate web developer and designer
            with a keen eye for detail and a drive for creating elegant,
            user-friendly websites.
          </p>

          <p className="mb-4 leading-8 text-gray-700">
            I specialize in building responsive websites and web applications
            that provide exceptional user experiences. With expertise in both
            front-end and back-end development, I can turn your ideas into fully
            functional digital products.
          </p>

          <p className="mb-4 leading-8 text-gray-700">
            My approach combines technical skills with creative design thinking,
            allowing me to develop solutions that are not only visually
            appealing but also technically efficient and scalable.
          </p>

          <p className="mb-6 leading-8 text-gray-700">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enhancing my skills through
            continuous learning.
          </p>

          <a
            href="/Rakin_Mathew_MERN_Resume.pdf"
            download
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
