import React from "react";

const Services = () => (
  <div
    id="services"
    className="flex flex-col items-center justify-center min-h-screen "
  >
    <div className="max-w-4xl mx-auto py-16">
      <h2 className="text-5xl font-bold mb-8 text-center ">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-w-screen mx-4 sm:mx-8">
        <div className="relative bg-pink-500 text-white p-8 rounded-lg hover:bg-pink-700 opacity-100 transition-colors duration-200 ">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg opacity-50 hover:opacity-0 transition-opacity duration-200 "
            style={{ backgroundImage: "url('../../discord-clone.png')" }}
          ></div>
          <div className="relative">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-mobile-alt fa-2x"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Finetuning Models</h3>
            <p className="text-sm">
              Finetuning models and making models for specialized tasks
            </p>
          </div>
        </div>
        <div className="relative bg-green-500 text-white p-8 rounded-lg">
          <div
            className="absolute inset-0 bg-cover rounded-lg bg-center opacity-50 hover:opacity-0 transition-opacity duration-200 "
            style={{ backgroundImage: "url('../../discord-clone.png')" }}
          ></div>
          <div className="relative">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-globe fa-2x"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Web Design</h3>
            <p className="text-sm">
              create stunning website, with MERN and no code platforms
            </p>
          </div>
        </div>

        <div className="relative bg-yellow-500 text-white p-8 rounded-lg">
          <div
            className="absolute inset-0 bg-cover rounded-lg bg-center opacity-50 hover:opacity-0 transition-opacity duration-200 "
            style={{ backgroundImage: "url('../../discord-clone.png')" }}
          ></div>
          <div className="relative">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-globe fa-2x"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
            <p className="text-sm">
              data analysis, prediction, decision making
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button
          className="bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4  rounded "
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Now
        </button>
      </div>
    </div>
  </div>
);

export default Services;
