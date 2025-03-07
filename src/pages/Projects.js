import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// Project card component
const ProjectCard = ({ project, onClick }) => (
  <div
    className="w-50 h-40 sm:w-50 sm:h-30 md:w-70 md:h-60 flex-shrink-0 relative m-2 bg-gray-300 rounded-lg overflow-auto hover:border-purple-500 hover:border-4 transition-all duration-200 ease-in-out"
    onClick={() => onClick(project)}
  >
    <img
      src={`/images/${project.backgroundImage}`}
      alt={project.title}
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
    <div className="absolute inset-0 flex flex-col justify-end p-4">
      <h3 className="text-white font-bold text-lg">{project.title}</h3>
      <div className="flex flex-wrap mt-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-gray-300 text-xs sm:text-sm mr-2 mb-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-md overflow-visible z-10">
        {project.isLive && "Live"}
        {project.isOnGithub && "On Github"}
        {project.isOngoing && "Ongoing"}
      </div>
    </div>
  </div>
);

// Project modal component
const ProjectModal = ({ project, onClose }) => (
  <>
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    />
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full mx-4 pointer-events-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-60">
          <img
            src={`/images/${project.backgroundImage}`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <button
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black transition-colors"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
            {project.title}
          </h2>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-700 mb-6">
            This project showcases my skills in{" "}
            {project.technologies.join(", ")}.
          </p>

          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              Visit Project
            </a>

            {project.isOnGithub && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
);

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainer1Ref = useRef(null);
  const scrollContainer2Ref = useRef(null);

  // State for drag scrolling - first row
  const [isDragging1, setIsDragging1] = useState(false);
  const [startX1, setStartX1] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);

  // State for drag scrolling - second row
  const [isDragging2, setIsDragging2] = useState(false);
  const [startX2, setStartX2] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  // Auto-scroll control
  const [autoScroll, setAutoScroll] = useState(true);
  const animationRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCol = collection(db, "projects");
      const projectsSnapshot = await getDocs(projectsCol);
      const projectsData = projectsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  // Mouse drag scrolling implementation for first row
  useEffect(() => {
    const container = scrollContainer1Ref.current;
    if (!container) return;

    const handleMouseDown = (e) => {
      setIsDragging1(true);
      setStartX1(e.pageX - container.offsetLeft);
      setScrollLeft1(container.scrollLeft);
      container.style.cursor = "grabbing";
      container.classList.add("active");
      setAutoScroll(false); // Pause auto-scrolling
    };

    const handleMouseMove = (e) => {
      if (!isDragging1) return;
      e.preventDefault(); // Prevent text selection
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX1) * 2; // Scroll speed multiplier
      container.scrollLeft = scrollLeft1 - walk;
    };

    const handleMouseUp = () => {
      setIsDragging1(false);
      container.style.cursor = "grab";
      container.classList.remove("active");
      setTimeout(() => setAutoScroll(true), 1500); // Resume auto-scroll after longer delay
    };

    const handleMouseLeave = () => {
      if (isDragging1) {
        setIsDragging1(false);
        container.style.cursor = "grab";
        container.classList.remove("active");
        setTimeout(() => setAutoScroll(true), 1500); // Resume auto-scroll after longer delay
      }
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Add touch support
    const handleTouchStart = (e) => {
      setIsDragging1(true);
      setStartX1(e.touches[0].pageX - container.offsetLeft);
      setScrollLeft1(container.scrollLeft);
      setAutoScroll(false); // Pause auto-scrolling
    };

    const handleTouchMove = (e) => {
      if (!isDragging1) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX1) * 2; // Scroll speed multiplier
      container.scrollLeft = scrollLeft1 - walk;
    };

    const handleTouchEnd = () => {
      setIsDragging1(false);
      setTimeout(() => setAutoScroll(true), 1500); // Resume auto-scroll after delay
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging1, startX1, scrollLeft1]);

  // Mouse drag scrolling implementation for second row
  useEffect(() => {
    const container = scrollContainer2Ref.current;
    if (!container) return;

    const handleMouseDown = (e) => {
      setIsDragging2(true);
      setStartX2(e.pageX - container.offsetLeft);
      setScrollLeft2(container.scrollLeft);
      container.style.cursor = "grabbing";
      container.classList.add("active");
      setAutoScroll(false); // Pause auto-scrolling
    };

    const handleMouseMove = (e) => {
      if (!isDragging2) return;
      e.preventDefault(); // Prevent text selection
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX2) * 2; // Scroll speed multiplier
      container.scrollLeft = scrollLeft2 - walk;
    };

    const handleMouseUp = () => {
      setIsDragging2(false);
      container.style.cursor = "grab";
      container.classList.remove("active");
      setTimeout(() => setAutoScroll(true), 1500); // Resume auto-scroll after longer delay
    };

    const handleMouseLeave = () => {
      if (isDragging2) {
        setIsDragging2(false);
        container.style.cursor = "grab";
        container.classList.remove("active");
        setTimeout(() => setAutoScroll(true), 1500); // Resume auto-scroll after longer delay
      }
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Add touch support
    const handleTouchStart = (e) => {
      setIsDragging2(true);
      setStartX2(e.touches[0].pageX - container.offsetLeft);
      setScrollLeft2(container.scrollLeft);
      setAutoScroll(false); // Pause auto-scrolling
    };

    const handleTouchMove = (e) => {
      if (!isDragging2) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX2) * 2; // Scroll speed multiplier
      container.scrollLeft = scrollLeft2 - walk;
    };

    const handleTouchEnd = () => {
      setIsDragging2(false);
      setTimeout(() => setAutoScroll(true), 1500); // Resume auto-scroll after delay
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging2, startX2, scrollLeft2]);

  // Auto scrolling implementation
  useEffect(() => {
    const container1 = scrollContainer1Ref.current;
    const container2 = scrollContainer2Ref.current;

    if (!container1 || !container2 || !autoScroll) return;

    // Initialize second row's position
    if (!isDragging2) {
      container2.scrollLeft = container2.scrollWidth / 2;
    }

    const doAutoScroll = () => {
      if (autoScroll) {
        // First row - scroll right
        if (!isDragging1 && container1) {
          container1.scrollLeft += 0.5;

          // Reset position for infinite loop
          if (container1.scrollLeft >= container1.scrollWidth / 2) {
            container1.style.scrollBehavior = "auto";
            container1.scrollLeft = 0;
            setTimeout(() => {
              container1.style.scrollBehavior = "smooth";
            }, 50);
          }
        }

        // Second row - scroll left
        if (!isDragging2 && container2) {
          container2.scrollLeft -= 0.5;

          // Reset position for infinite loop
          if (container2.scrollLeft <= 0) {
            container2.style.scrollBehavior = "auto";
            container2.scrollLeft = container2.scrollWidth / 2;
            setTimeout(() => {
              container2.style.scrollBehavior = "smooth";
            }, 50);
          }
        }
      }

      animationRef.current = requestAnimationFrame(doAutoScroll);
    };

    animationRef.current = requestAnimationFrame(doAutoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [projects, autoScroll, isDragging1, isDragging2]);

  // Handle project card click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Handle close modal
  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = ""; // Restore scrolling
  };

  // Pause auto-scroll when hovering over container
  const handleMouseEnter = () => {
    setAutoScroll(false);
  };

  // Resume auto-scroll when leaving container
  const handleMouseExit = () => {
    if (!isDragging1 && !isDragging2) {
      setTimeout(() => setAutoScroll(true), 500);
    }
  };

  return (
    <>
      <div
        id="project"
        className="relative flex flex-col items-center justify-center min-h-screen py-16"
      >
        <h2 className="text-5xl font-bold text-center mb-8">
          Projects
          <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />
        </h2>

        {/* First row - original */}
        <div
          ref={scrollContainer1Ref}
          className="flex flex-col md:flex-row overflow-y-auto md:overflow-x-auto overflow-x-hidden w-full px-4 pb-8 scrollbar-hide snap-y md:snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
            scrollBehavior: "smooth",
            cursor: "grab",
            userSelect: "none", // Prevent text selection
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseExit}
        >
          <div className="flex flex-col md:flex-row">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
            {/* Duplicate projects for infinite scroll effect - only visible on md screens */}
            <div className="hidden md:flex">
              {projects.map((project) => (
                <ProjectCard
                  key={`dup1-${project.id}`}
                  project={project}
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Second row - replicated with reverse order - hidden on small screens */}
        <div
          ref={scrollContainer2Ref}
          className="hidden md:flex overflow-x-auto w-full px-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
            scrollBehavior: "smooth",
            cursor: "grab",
            userSelect: "none", // Prevent text selection
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseExit}
        >
          <div className="flex">
            {[...projects].reverse().map((project) => (
              <ProjectCard
                key={`rev-${project.id}`}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
            {/* Duplicate projects for infinite scroll effect */}
            {[...projects].reverse().map((project) => (
              <ProjectCard
                key={`dup2-${project.id}`}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}

      <hr className="border-t-5 border-gray-300 my-8" />

      {/* CSS for hiding scrollbars */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .active {
          cursor: grabbing !important;
        }
      `}</style>
    </>
  );
};

export default Project;
