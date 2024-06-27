import React, { useState, useEffect } from "react";
import "./darkmode.css";

const NavItem = ({ id, text, onClick }) => (
  <li>
    <button
      onClick={() => onClick(id)}
      className="hover:text-purple-600 text-gray-800 transition duration-300 cursor-pointer"
    >
      {text}
    </button>
  </li>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"
  >
    <i className={`fab fa-${icon}`}></i>
  </a>
);

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || "light");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setDarkMode(darkMode === "dark" ? "light" : "dark");

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.querySelector("html").setAttribute("data-theme", darkMode);
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [darkMode, isOpen]);

  const navItems = [
    { id: "about", text: "Me" },
    { id: "skills", text: "My Skills" },
    { id: "project", text: "Projects" },
    { id: "experience", text: "Experience" },
    { id: "services", text: "Services" },
    { id: "contact", text: "Contact" },
  ];

  const socialIcons = [
    { href: "https://github.com/theanupamkumar1", icon: "github" },
    { href: "https://twitter.com/the_anupamkumar", icon: "twitter" },
    { href: "https://instagram.com/the_anupam_kumar", icon: "instagram" },
    { href: "https://linkedin.com/in/theanupamkumar1", icon: "linkedin" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg bg-white/30 py-4 px-8 ${darkMode === "dark" ? "dark-mode" : ""}`}>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 hidden md:block">Anupam</div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <i className={`fa fa-${isOpen ? "times" : "bars"}`}></i>
          </button>

          <ul className="hidden md:flex space-x-4 text-gray-800">
            {navItems.map((item) => (
              <NavItem key={item.id} {...item} onClick={scrollToSection} />
            ))}
          </ul>

          <div className="flex space-x-4">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>

          <button
            className="ml-4 bg-gray-800 text-white rounded px-2 py-1 hidden md:block"
            onClick={toggle}
          >
            Dark Mode
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-white/30">
          <ul className="flex flex-col space-y-4 text-gray-800 rounded-lg p-10">
            <div className="md:hidden flex justify-end text-lg">
              <button onClick={() => setIsOpen(false)}>
                <i className="fa fa-times text-red-500"></i>
              </button>
            </div>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-bold hover:text-purple-600 text-gray-800 transition duration-300 cursor-pointer"
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;