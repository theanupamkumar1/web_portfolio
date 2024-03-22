import React from "react";
// import "../../comps/layout/darkmode.css";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Discord Clone",
    technologies: [
      "Next.js 13",
      "React Hook Form",
      "Zustand",
      "Shaders",
      "Typescript",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
    isLive: "t",
  },
  {
    id: 2,
    title: "Spotify Clone",
    technologies: [
      "Next.js 13",
      "React Hook Form",
      "Zustand",
      "Radix UI",
      "Typescript",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
    isOnGithub: "t",
  },
  {
    id: 3,
    title: "Amazon Clone",
    technologies: [
      "Node.js",
      "Express",
      "Mongoose",
      "Next.js 13",
      "Next Auth",
      "React",
      "Hook Form",
      "Typescript",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
    isOnGithub: "t",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
    isLive: "True",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
    isLive: "",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
  },
  {
    id: 4,
    title: "DALL-E Clone",
    technologies: [
      "OpenAI",
      "Node.js",
      "Express",
      "Mongoose",
      "React.js",
      "Tailwind CSS",
    ],
    backgroundImage: "../../discord-clone.png",
    link: "https://github.com/theanupamkumar1?tab=repositories",
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
      <h2 className="top-20 text-5xl font-bold text-center mb-8 ">Projects</h2>
      <div className="flex flex-col sm:flex-row overflow-y-auto scrollbar scrollbar-thumb-blue-500">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    <hr className="border-t-5 border-gray-300 my-8" />
  </>
);

export default Project;
