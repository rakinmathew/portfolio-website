import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
          About Me
        </h1>
        <div className="w-18 h-1 mx-auto mt-4 bg-blue-500"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center ">
        {/* Profile Picture */}

        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src=""
            alt="Rakin's Profile Picture"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Text Content */}

        <div className="w-full md:w-2/3 text-gray-900 leading-relaxed md:text-lg">
          <p className="mb-4 ">
            {" "}
            Hello! I'm RAKIN K MATHEW, a passionate web developer and designer
            with a keen eye for detail and a drive for creating elegant,
            user-friendly websites.{" "}
          </p>

          <p className="mb-4">
            {" "}
            I specialize in building responsive websites and web applications
            that provide exceptional user experiences. With expertise in both
            front-end and back-end development, I can turn your ideas into fully
            functional digital products.
          </p>
          <p className="mb-4">
            {" "}
            My approach combines technical skills with creative design thinking,
            allowing me to develop solutions that are not only visually
            appealing but also technically efficient and scalable.{" "}
          </p>
          <p className="mb-4">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enhancing my skills through
            continuous learning.
          </p>

          <a
            className=" inline-block text-lg  px-6 py-3 font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transform  hover:scale-105 active:scale-95 text-white"
            href="/Rakin_Mathew_MERN_Resume.pdf"
            download
          >
            Download Resume{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
