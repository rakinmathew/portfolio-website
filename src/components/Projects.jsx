import React from "react";

const projects = [
  {
    title: "Ecommerce Website",
    description:
      "A fully responsive e-commerce website built with React, Node.js, and MongoDB. It features user authentication, product listings, shopping cart functionality, and secure payment integration.",
    image: "/images/ecommerce.png",
    tech: "React.js,Node.js, MongoDB, Express.js",
    live: "#",
    code: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      " A normal portfolio website built with React and Tailwind CSS. It showcases my projects, skills, and experience in a clean and modern design.",
    image: "/images/portfolio.png",
    tech: "React.js, Tailwind CSS",
    live: "#",
    code: "#",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides real-time weather information for any location. It uses the OpenWeatherMap API to fetch data and displays it in a user-friendly interface.",
    image: "/images/weather.png",
    tech: "React.js, Tailwind CSS, OpenWeatherMap API",
    live: "#",
    code: "#",
  },
  {
    title: "Netflix UI Clone",
    description:
      "A responsive UI clone of the Netflix streaming service built with React and Tailwind CSS. It features a modern design, responsive layout, and interactive elements.",
    image: "/images/netflix.png",
    tech: "React.js, Tailwind CSS",
    live: "#",
    code: "#",
  },
  {
    title: "Product Landing Page",
    description:
      " A Product landing page for a violin build with HTML5 and CSS3. The page is designed to be visually appealing and responsive, showcasing the features and benefits of the product effectively.",
    image: "/images/landing.png",
    tech: "HTML5, CSS3",
    live: "#",
    code: "#",
  },
  {
    title: "Calculator App",
    description:
      "A simple calculator application built with React & Tailwind CSS. It supports basic arithmetic operations and has a clean and intuitive user interface.",
    image: "/images/calculator.png",
    tech: "React.js, Tailwind CSS",
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-white text-gray-800" id="projects">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          My Projects
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* Card Components  */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-6 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.split(",").map((item, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.live}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="text-gray-700 font-medium hover:text-gray-900"
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
