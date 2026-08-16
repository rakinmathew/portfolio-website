import React from "react";
import calculator from "../assets/calculator.png";
import ecommerce from "../assets/ecommerce.png";
import netflix from "../assets/netflix.png";
import landingpage from "../assets/landingpage.png";

const projects = [
  {
    title: "Ecommerce Website",
    description:
      "A fully responsive e-commerce website built with React, Node.js, and MongoDB. It features user authentication, product listings, shopping cart functionality, and secure payment integration.",
    image: ecommerce,
    tech: "React.js,Node.js, MongoDB, Express.js",
    live: "https://ecommerce-frontend-ashen-beta.vercel.app/",
    code: "https://github.com/rakinmathew/Ecommerce-App.git",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A normal portfolio website built with React and Tailwind CSS. It showcases my projects, skills, and experience in a clean and modern design.",
    image: "/images/portfolio-project.svg",
    tech: "React.js, Tailwind CSS",
    live: "#home",
    code: "https://github.com/rakinmathew",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides real-time weather information for any location. It uses the OpenWeatherMap API to fetch data and displays it in a user-friendly interface.",
    image: "/images/weather.png",
    tech: "React.js, Tailwind CSS, OpenWeatherMap API",
    live: "#projects",
    code: "https://github.com/rakinmathew",
  },
  {
    title: "Netflix UI Clone",
    description:
      "A responsive UI clone of the Netflix streaming service built with React and Tailwind CSS. It features a modern design, responsive layout, and interactive elements.",
    image: netflix,
    tech: "React.js, Tailwind CSS",
    live: "https://rakin-netflix-ui-clone-udr8.vercel.app/",
    code: "https://github.com/rakinmathew/rakin-netflix-ui-clone.git",
  },
  {
    title: "Product Landing Page",
    description:
      "A Product landing page for a start-up built with HTML5 and CSS3. The page is designed to be visually appealing and responsive, showcasing the features and benefits of the product effectively.",
    image: landingpage,
    tech: "HTML5, CSS3",
    live: "#home",
    code: "https://github.com/rakinmathew",
  },
  {
    title: "Calculator App",
    description:
      "A simple calculator application built with React & Tailwind CSS. It supports basic arithmetic operations and has a clean and intuitive user interface.",
    image: calculator,
    tech: "React.js, Tailwind CSS",
    live: "https://react-calculator-coral-tau.vercel.app/",
    code: "https://github.com/rakinmathew/react-calculator.git",
  },
];

const Projects = () => {
  return (
    <section className="bg-slate-100 px-4 py-20 text-gray-800" id="projects">
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
          Portfolio
        </p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
          My recent work
        </h2>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#3498db] to-[#2563eb]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(37,99,235,0.14)]"
          >
            <div className="overflow-hidden bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover object-top transition duration-300 hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-6 text-gray-600">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.split(",").map((item, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 transition hover:text-blue-800"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-700 transition hover:text-gray-900"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
