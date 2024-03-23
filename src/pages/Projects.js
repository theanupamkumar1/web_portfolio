import React from "react";
// import "../../comps/layout/darkmode.css";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Banking System",
    technologies: ["Python", "SQLite"],
    backgroundImage: "../../bm.png",
    link: "https://github.com/theanupamkumar1/banking-system-with-sqlite-db",
    isOnGithub: "t",
  },
  {
    id: 2,
    title: "Mental Fitness Tracker",
    technologies: ["Numpy", "Pandas", "MatplotLib", "SK-Learn", "Python"],
    backgroundImage: "../../mental-fi.png",
    link: "https://github.com/theanupamkumar1/Mental-Fitness-Tracker",
    isOnGithub: "t",
  },
  {
    id: 3,
    title: "Responsive Portfolio",
    technologies: [
      "React.js",
      "Daisy ui",
      "Email.js",
      "Typescript",
      "Tailwind CSS",
      "Vercel",
    ],
    backgroundImage: "../../poertfolio.png",
    link: "https://www.theanupamkumar.me/",
    isLive: "t",
  },
  {
    id: 4,
    title: "Python Projects",
    technologies: ["Vannila Python", "py Lib", "py framworks"],
    backgroundImage: "../../py.png",
    link: "https://github.com/theanupamkumar1/python_projects",
    isOnGithub: "True",
  },

  {
    id: 4,
    title: "Domain-Compare",
    technologies: ["LLms", "MERN", "Tailwind CSS", "Langchain", "Azure"],
    backgroundImage: "../../domain.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
    isOngoing: "r",
  },
];

const ProjectCard = ({ project }) => (
  <div className="w-50 h-40 sm:w-50 sm:h-30 md:w-70 md:h-60 flex-shrink-0 relative m-2 bg-gray-300 rounded-lg overflow-auto hover:border-purple-500 hover:border-4 transition-all duration-200 ease-in-out">
    <img
      src={`/images/${project.backgroundImage}`}
      alt={project.title}
      className="object-cover w-full h-full"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
    <div className="absolute inset-0 flex flex-col justify-end p-4">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <h3 className="text-white font-bold text-lg">{project.title}</h3>

        <div className="flex flex-wrap mt-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-gray-300 text-sm mr-2">
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-md overflow-visible z-10">
          {project.isLive && "Live"}
          {project.isOnGithub && "On Github"}
          {project.isOngoing && "Ongoing"}
        </div>
      </a>
    </div>
  </div>
);

const Project = () => (
  <>
    <div
      id="project"
      className=" relative flex flex-col items-center justify-center min-h-screen "
    >
      <h2 className="top-20 text-5xl font-bold text-center mb-8">
        Projects
        <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />
        {/* <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
      </h2>
      <div className="flex flex-col sm:flex-row overflow-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
    <hr className="border-t-5 border-gray-300 my-8" />
  </>
);

export default Project;
