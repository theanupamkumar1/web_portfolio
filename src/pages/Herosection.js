import React from "react";
import "./herosection.css";
import "../../src/comps/layout/darkmode.css";

const HeroSection = () => {
  return (
    <div
      id="about"
      className="hero-section flex flex-col mt-[80px] md:h-auto overflow-visible"
    >
      <div className="hero-content h-auto md:w-full md:ml-[40px]">
        <div className="hero-text">
          <h1 className="font-bold">I'm Anupam Kumar </h1>
          <p>
            An
            <span className="text-purple font-bold px-2 py-1 rounded">
              AI Engineer,
            </span>
            <span className="text-purple font-bold px-2 py-1 rounded">
              Data Scientist
            </span>
            and a
            <span className="text-purple font-bold px-2 py-1 rounded">
              Machine Learning
            </span>{" "}
            enthusiast. beside this i'm a{" "}
            <span className="text-purple font-bold px-2 py-1 rounded">
              UI/UX
            </span>{" "}
            desinger.
            <p>
              <span>
                {" "}
                I'm seeking for a good opportunity in these fields to contribute
                and gain experience{" "}
              </span>
            </p>
          </p>
          <button
            className="hire-btn transition duration-200 hover:bg-purple-500 hover:text-white"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hire Me
          </button>
          <button
            className="projects transition duration-200 text-gray hover:bg-gray-100 hover:text-black"
            onClick={() => {
              document
                .getElementById("project")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </button>
        </div>

        {/* <div className=" center blob pattern bg-hero-image mt-10 ml-[100px]">
          <div className="hero-image m-4  ">
            <img
              className="hero-image w-96 h-96 rounded-br-[200px] rounded-bl-[10px] ml-[100px] mb-20"
              src="../../logo.png"
              alt="Hero"
            />
          </div>
        </div>
      </div> */}

        <div className=" h-auto bg-hero-image bg-cover bg-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-t-full  rounded-br-full">
          <div className="hero-image m-4  ">
            <img
              className="hero-image w-96 h-96 rounded-br-[150px] md:rounded-br-[200px]"
              src="../../hero.webp"
              alt="Hero"
            />
          </div>
        </div>
      </div>
      {/* md:w-1/2 md:px-30 py-5 overflow-hidden mt-[-100px] ml-[40px] */}
      <div className="stats lg:w-1/2 lg:ml-5 postion lg:relative lg:-top-24">
        <div className="stat flex flex-col items-center">
          <span className="stat-value">6+</span>
          <span className="stat-label">Projects Done</span>
        </div>
        <div className="stat flex flex-col items-center">
          <span className="stat-value">2yr+</span>
          <span className="stat-label">Experience</span>
        </div>
        <div className="stat flex flex-col items-center">
          <span className="stat-value">2+</span>
          <span className="stat-label">Internships</span>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-8" />
    </div>
  );
};

export default HeroSection;
