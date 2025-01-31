// //firebsae code------------------------------------------------------

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./herosection.css";
import { collection, getDocs } from "firebase/firestore";

const HeroSection = () => {
  const [heroData, setHeroData] = useState({});

  useEffect(() => {
    const fetchHeroData = async () => {
      const heroCol = collection(db, "heroSection");
      const heroSnapshot = await getDocs(heroCol);
      const heroData = heroSnapshot.docs[0].data(); // Assuming only one document
      setHeroData(heroData);
    };

    fetchHeroData();
  }, []);

  // Keywords to highlight
  const highlightKeywords = [
    {
      keyword: "AI Engineer",
      className: "text-purple font-bold px-2 py-1 rounded",
    },
    {
      keyword: "Data Scientist",
      className: "text-purple font-bold px-2 py-1 rounded",
    },
    {
      keyword: "Machine Learning",
      className: "text-purple font-bold px-2 py-1 rounded",
    },
    { keyword: "UI/UX", className: "text-purple font-bold px-2 py-1 rounded" },
  ];

  // Function to highlight keywords
  const highlightText = (text, keywords) => {
    if (!text) return ""; // Return an empty string if text is undefined or null

    let highlightedText = text;

    keywords.forEach(({ keyword, className }) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span class="${className}">$1</span>`
      );
    });

    return highlightedText;
  };

  return (
    <div
      id="about"
      className="hero-section flex flex-col mt-[80px] md:h-auto overflow-visible"
    >
      <div className="hero-content h-auto md:w-full md:ml-[40px]">
        <div className="hero-text">
          <h1 className="font-bold">I'm {heroData.name || "Loading..."}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(heroData.description, highlightKeywords),
            }}
          />
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
        <div className="h-auto bg-hero-image bg-cover bg-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-t-full rounded-br-full">
          <div className="hero-image m-4">
            <img
              className="hero-image w-96 h-96 rounded-br-[150px] md:rounded-br-[200px]"
              src="../../hero.webp"
              alt="Hero"
            />
          </div>
        </div>
      </div>
      <div className="stats lg:w-1/2 lg:ml-5 postion lg:relative lg:-top-24">
        {heroData.stats?.map((stat, index) => (
          <div key={index} className="stat flex flex-col items-center">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <hr className="border-t-2 border-gray-300 my-8" />
    </div>
  );
};

export default HeroSection;
