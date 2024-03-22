import React, { useState, useEffect } from "react";
import "./darkmode.css";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : "light"
  );
  const toggle = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    } else {
      setDarkMode("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    const localtheme = localStorage.getItem("darkMode");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [darkMode]);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg bg-white/30 py-4 px-8 ${
          darkMode === "dark" ? "dark-mode" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 hidden md:block">
            Anupam
          </div>
          <div className="md:hidden">
            {isOpen ? (
              <button onClick={() => setIsOpen(false)}>
                <i className="fa fa-times"></i>
              </button>
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <i className="fa fa-bars"></i>
              </button>
            )}
          </div>

          <ul
            className={`hidden md:flex space-x-4 text-gray-800 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("project")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                Project
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="flex space-x-4">
            <a
              href="https://github.com/theanupamkumar1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-gray-800 hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"></i>
            </a>
            <a
              href="https://twitter.com/the_anupamkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter text-gray-800 hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"></i>
            </a>
            <a
              href="https://instagram.com/the_anupam_kumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram text-gray-800 hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"></i>
            </a>
            <a
              href="https://linkedin.com/in/theanupamkumar1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-gray-800 hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"></i>
            </a>
          </div>

          <button
            className="ml-4 bg-gray-800 text-white rounded px-2 py-1 hidden md:block"
            onClick={toggle}
          >
            Dark Mode
          </button>
        </div>
      </nav>
      {/* mobile view menu bar  -----------------------------------------------------------------*/}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-white/30">
          <ul className="flex flex-col space-y-4 text-gray-800 rounded-lg p-10 ">
            <div className="md:hidden flex justify-end text-lg">
              {isOpen ? (
                <button onClick={() => setIsOpen(false)}>
                  <i className="fa fa-times text-red-500"></i>
                </button>
              ) : (
                <button onClick={() => setIsOpen(true)}>
                  <i className="fa fa-bars text-green-500"></i>
                </button>
              )}
            </div>
            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-2xl font-bold hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-2xl font-bold hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("project")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-2xl font-bold hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                Project
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-2xl font-bold hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="text-2xl font-bold hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
