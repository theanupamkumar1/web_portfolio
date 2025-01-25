// import React from "react";

// const skills = {
//   Web_Dev: [
//     "MERN-Basic",
//     "Bootstrap",
//     "Tailwind",
//     "UI/UX-Figma",
//     "HTML-CSS-JS",
//     "Flask",
//   ],

//   Languages: ["Python", "C/C++", "JavaScript"],
//   Data_Science: [
//     "NumPy",
//     "Pandas",
//     "Scikit-learn",
//     "Matplotlib",
//     "TensorFlow",
//     "Keras",
//     "Data Vis- PowerBI",
//     "EDA",
//     "Web-Scraping"

//   ],

//   ML_Ops: [
//     "Classification",
//     "Regression",
//     "Deep Learning",
//     "Computer Vision",
//     "Natural Language Processing (NLP)",

//     "PyTorch",
//     "Docker",
//     "MLflow",
//     "Dagshub",
//     "Github actions"
//   ],
//   Additional: [
//     "Version Control Systems (Git, GitLab)",
//     "Cloud Computing (Google Cloud)",
//     "APIs (REST, GraphQL, Fast API)",
//     "Content Creation (Editing, Research)",
//     "Soft Skills ",
//   ],
// };

// const Skills = () => (
//   <div
//     id="skills"
//     className=" flex flex-col items-center justify-center min-h-screen "
//   >
//     <div className="max-w-4xl mx-auto py-16">
//       <h2 className="text-5xl font-bold mb-8 text-center ">My Skills</h2>
//       <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 min-w-screen">
//         {Object.entries(skills).map(([category, techs]) => (
//           <div
//             key={category}
//             className="bg-gray-800 rounded-lg p-6 mx-4 lg:w-auto lg:max-w-[30rem] flex flex-col"
//           >
//             <h3 className="text-lg font-bold mb-4 text-white">{category}</h3>
//             <div className="flex flex-wrap">
//               {techs.map((tech, index) => (
//                 <span
//                   key={tech}
//                   className={`bg-gray-700 text-gray-300 py-1 px-2 mr-2 mb-2 rounded-md ${
//                     index % 2 !== 0
//                       ? "border border-purple"
//                       : "border border-skyblue"
//                   }`}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-20 ">
//         <a
//           href="https://drive.google.com/file/d/1BOPgUi15ePeZOgz5IEOCLYoz9Lwcg-wI/view?usp=drive_link"
//           download
//           className="bg-purple-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
//           target="_blank"
//         >
//           Download Resume <i class="fas fa-download mr-2"></i>
//         </a>
//       </div>
//     </div>
//     <hr className="border-t-2 border-gray-300 my-8 w-full" />
//   </div>
// );

// export default Skills;

// src/components/Skills.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const fetchSkills = async () => {
      const skillsCol = collection(db, "skills");
      const skillsSnapshot = await getDocs(skillsCol);
      const skillsData = {};
      skillsSnapshot.docs.forEach((doc) => {
        skillsData[doc.id] = doc.data().techs;
      });
      setSkills(skillsData);
    };

    fetchSkills();
  }, []);

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="max-w-4xl mx-auto py-16">
        <h2 className="text-5xl font-bold mb-8 text-center">My Skills</h2>
        <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 min-w-screen">
          {Object.entries(skills).map(([category, techs]) => (
            <div
              key={category}
              className="bg-gray-800 rounded-lg p-6 mx-4 lg:w-auto lg:max-w-[30rem] flex flex-col"
            >
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
        <div className="flex justify-center mt-20">
          <a
            href="/resume.pdf"
            download
            className="bg-purple-500 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            target="_blank"
          >
            Download Resume <i className="fas fa-download mr-2"></i>
          </a>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-8 w-full" />
    </div>
  );
};

export default Skills;
