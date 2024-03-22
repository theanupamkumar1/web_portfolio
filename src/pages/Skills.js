import React from "react";

const skills = {
  frontend: [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "Typescript",
    "React Js",
    "Next Js 13",
  ],
  backend: ["Node Js", "Express Js", "BUN Js", "Elysia", "Next Auth"],
  database: ["MySql", "MongoDB", "PostgreSQL", "Redis", "Elastic Search"],
  devops: [
    "Docker",
    "Kubernetes",
    "GIT",
    "Jenkins",
    "Ansible",
    "Terraform",
    "AWS",
  ],
  //   blockchain: ["multichain", "openzeppline", "solidity", "chainlink", "eth"],
};

const Skills = () => (
  <div
    id="skills"
    className=" flex flex-col items-center justify-center min-h-screen "
  >
    <div className="max-w-4xl mx-auto py-16">
      <h2 className="text-5xl font-bold mb-8 text-center ">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-w-screen">
        {Object.entries(skills).map(([category, techs]) => (
          <div key={category} className="bg-gray-800 rounded-lg p-6 mx-4">
            <h3 className="text-lg font-bold mb-4 text-white">{category}</h3>
            <div className="flex flex-wrap">
              {techs.map((tech, index) => (
                <span
                  key={tech}
                  className={`bg-gray-700 text-gray-300 py-1 px-2 mr-2 mb-2 rounded-md ${
                    index % 2 !== 0
                      ? "border border-purple"
                      : "border border-skyblue"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20 ">
        <a
          href="https://drive.google.com/file/d/1mW368ZjyNgGjofS7pAvdI9_i3S9CwQcp/view"
          download
          className="bg-purple-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
          target="_blank"
        >
          Download Resume <i class="fas fa-download mr-2"></i>
        </a>
      </div>
    </div>
    <hr className="border-t-2 border-gray-300 my-8 w-full" />
  </div>
);

export default Skills;
