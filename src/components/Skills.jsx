import React from "react";

const Skills = () => {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-[#1f2f46] via-[#2c3e50] to-[#3498db] text-gray-800"
      id="skills"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-100">
          My Skills
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card Components */}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-blue-600 text-center mb-6 font-bold">
            Front-End Development
          </h3>
          {/* Skills */}

          {[
            ["HTML5", "90%"],
            ["CSS3", "70%"],
            ["JavaScript", "55%"],
            ["React.js & Next.js", "65%"],
          ].map(([skill, percent]) => (
            <div key={skill} className="mb-4">
              <div className="flex justify-between mb-1 font-semibold text-lg">
                <span>{skill}</span>
                <span>{percent}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full w-[90%]"
                  style={{ width: percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend Card */}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-blue-600 text-center mb-6 font-bold">
            Back-End Development
          </h3>
          {/* Skills */}

          {[
            ["Node.js", "60%"],
            ["Express.js", "60%"],
            ["MongoDB", "60%"],
            ["PostgreSQL", "60%"],
          ].map(([skill, percent]) => (
            <div key={skill} className="mb-4">
              <div className="flex justify-between mb-1 font-semibold text-lg">
                <span>{skill}</span>
                <span>{percent}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full w-[90%]"
                  style={{ width: percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Design & Tools */}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-blue-600 text-center mb-6 font-bold">
            Design & Tools
          </h3>
          {/* Skills */}

          {[
            ["Responsive Design", "75%"],
            ["Figma UI/UX Design", "60%"],
            ["Tailwind CSS", "85%"],
            ["Git & GitHub", "60%"],
          ].map(([skill, percent]) => (
            <div key={skill} className="mb-4">
              <div className="flex justify-between mb-1 font-semibold text-lg">
                <span>{skill}</span>
                <span>{percent}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full w-[90%]"
                  style={{ width: percent }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
