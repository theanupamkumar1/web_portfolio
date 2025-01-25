// import React from "react";

// const Services = () => (
//   <div
//     id="services"
//     className="flex flex-col items-center justify-center min-h-screen "
//   >
//     <div className="max-w-4xl mx-auto py-16">
//       <h2 className="text-5xl font-bold mb-8 text-center ">Services</h2>
//       <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-w-screen mx-4 sm:mx-8">
//         <div className="relative bg-purple-500 text-white p-8 rounded-lg hover: opacity-100 transition-colors duration-200 ">
//           <div
//             className="absolute inset-0 bg-cover bg-center rounded-lg opacity-50 hover:opacity-0 transition-opacity duration-200 "
//             style={{ backgroundImage: "url('../../ml.png')" }}
//           ></div>
//           <div className="relative">
//             <div className="flex items-center justify-center mb-4"></div>
//             <h3 className="text-xl font-bold mb-2">Python development</h3>
//             <p className="text-sm">
//               creating application & solution with python ecosystem
//             </p>
//           </div>
//         </div>

//         <div className="relative bg-purple-500 text-white p-8 rounded-lg">
//           <div
//             className="absolute inset-0 bg-cover rounded-lg bg-center opacity-50 hover:opacity-0 transition-opacity duration-200 "
//             style={{ backgroundImage: "url('../../web.jpg')" }}
//           ></div>
//           <div className="relative">
//             <div className="flex items-center justify-center mb-4"></div>
//             <h3 className="text-xl font-bold mb-2 drop-shadow-lg">
//               Web Design
//             </h3>
//             <p className="text-sm drop-shadow-lg">
//               create stunning website, with MERN and Flak.
//             </p>
//           </div>
//         </div>

//         <div className="relative bg-purple-500 text-white p-8 rounded-lg">
//           <div
//             className="absolute inset-0 bg-cover rounded-lg bg-center opacity-50 hover:opacity-0 transition-opacity duration-200 "
//             style={{ backgroundImage: "url('../../ai.jpg')" }}
//           ></div>
//           <div className="relative">
//             <div className="flex items-center justify-center mb-4"></div>
//             <h3 className="text-xl font-bold mb-2">ML Modeling</h3>
//             <p className="text-sm">
//               complete ML-Ops workflow with deployment & monitoring
//             </p>
//           </div>
//         </div>
//         <div className="relative bg-purple-500 text-white p-8 rounded-lg">
//           <div
//             className="absolute inset-0 bg-cover rounded-lg bg-center opacity-50 hover:opacity-0 transition-opacity duration-200 "
//             style={{ backgroundImage: "url('../../gen_ai.jpg')" }}
//           ></div>
//           <div className="relative">
//             <div className="flex items-center justify-center mb-4"></div>
//             <h3 className="text-xl font-bold mb-2">
//               AI-Content Generation
//             </h3>
//             <p className="text-sm">
//               Leveraging AI to generate creative and engaging content
//               automatically.
//             </p>
//           </div>
//         </div>

//         <div className="relative bg-purple-500 text-white p-8 rounded-lg backdrop-filter backdrop-blur-lg ">
//           <div
//             className="absolute inset-0 bg-cover rounded-lg bg-center opacity-50 hover:opacity-0 transition-opacity duration-200 "
//             style={{ backgroundImage: "url('../../nlp.png')" }}
//           ></div>
//           <div className="relative">
//             <div className="flex items-center justify-center mb-4"></div>
//             <h3 className="text-xl font-bold mb-2">
//               NLP and Gen AI
//             </h3>
//             <p className="text-sm">
//               interating NLP and Gen AI
//               for advanced text handling and generation.
//             </p>
//           </div>
//         </div>

//         <div className="relative bg-purple-500 text-white p-8 rounded-lg">
//           <div
//             className="absolute inset-0 bg-cover rounded-lg bg-center opacity-50 hover:opacity-0 transition-opacity duration-200 "
//             style={{ backgroundImage: "url('../../data.png')" }}
//           ></div>
//           <div className="relative">
//             <div className="flex items-center justify-center mb-4"></div>
//             <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
//             <p className="text-sm">
//               Analyzing and interpreting complex datasets for
//               decision-making and predictions.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center mt-20">
//         <button
//           className="bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4  rounded "
//           onClick={() => {
//             document
//               .getElementById("contact")
//               .scrollIntoView({ behavior: "smooth" });
//           }}
//         >
//           Contact Now
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default Services;

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesCol = collection(db, "services");
      const servicesSnapshot = await getDocs(servicesCol);
      const servicesData = servicesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServices(servicesData);
    };

    fetchServices();
  }, []);

  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="max-w-4xl mx-auto py-16">
        <h2 className="text-5xl font-bold mb-8 text-center">Services</h2>
        <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-w-screen mx-4 sm:mx-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-purple-500 text-white p-8 rounded-lg hover:opacity-100 transition-colors duration-200"
            >
              {/* Background Image with Blur Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg opacity-20 hover:opacity-0 transition-opacity duration-200 backdrop-blur-md"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>

              {/* Service Content */}
              <div className="relative">
                <div className="flex items-center justify-center mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <button
            className="bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
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
};

export default Services;
