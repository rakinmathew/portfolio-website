import React from "react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Front-End Development",
      skills: [
        ["HTML5", "90%"],
        ["CSS3", "70%"],
        ["JavaScript", "55%"],
        ["React.js & Next.js", "65%"],
      ],
    },
    {
      title: "Back-End Development",
      skills: [
        ["Node.js", "60%"],
        ["Express.js", "60%"],
        ["MongoDB", "60%"],
        ["PostgreSQL", "60%"],
      ],
    },
    {
      title: "Design & Tools",
      skills: [
        ["Responsive Design", "75%"],
        ["Figma UI/UX Design", "60%"],
        ["Tailwind CSS", "85%"],
        ["Git & GitHub", "60%"],
      ],
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-[#1f2f46] via-[#2c3e50] to-[#3498db] px-4 py-20"
      id="skills"
    >
      <div className="mx-auto mb-12 max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#dbeafe]">
          My Skills
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
          Creative problem solving with modern tech
        </h2>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#2563eb]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.2)] backdrop-blur-sm"
          >
            <h3 className="mb-6 text-center text-xl font-bold text-[#dbeafe]">
              {group.title}
            </h3>

            {group.skills.map(([skill, percent]) => (
              <div key={skill} className="mb-5">
                <div className="mb-2 flex items-center justify-between text-sm font-semibold text-white/90 md:text-base">
                  <span>{skill}</span>
                  <span>{percent}</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#2563eb]"
                    style={{ width: percent }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
