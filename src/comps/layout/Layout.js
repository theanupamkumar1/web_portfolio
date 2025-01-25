import React from "react";
import NavBar from "../../comps/layout/NavBar";

// import myImage from "../../assets/myImage.jpg"; // Import your image here
import "./layouts.css";
import "./darkmode.css";

import HeroSection from "../../pages/Herosection";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Services from "../../pages/Services";
import ContactMe from "../../pages/Contact";
import ExperiencePage from "../../pages/Experience";
// import Blog from "../../pages/BlogSection";
import BlogSection from "../../pages/BlogSection";

const Layout = () => {
  return (
    <>
      <div className="nav">
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>

      <div>
        <Projects />
      </div>
      <div>
        <ExperiencePage />
      </div>
      <div>
        <ExperiencePage />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <BlogSection />
      </div>
      <div>
        <ContactMe />
      </div>
      
    </>
  );
};

export default Layout;
