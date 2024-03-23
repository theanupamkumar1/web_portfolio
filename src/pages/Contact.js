import React, { useState } from "react";
import emailjs from "emailjs-com";
// import emailjs from "@emailjs/browser";
const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    emailjs
      .send(
        "service_jyfv4dt",
        "template_3dwh5bq",
        formData,
        "LjgJ9UEwCJA2SxFg5"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // Reset form data after submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className=" py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          id="contact"
          className="text-3xl font-bold mb-4 text-gray top-20 text-5xl font-bold text-center mb-8"
        >
          Get in Touch
        </h2>
        <hr className="w-24 h-1 mx-auto my-4 bg-purple border-0 rounded md:my-5 dark:bg-gray-700" />

        {/* <div className="h-1 bg-purple-500 mb-8"></div>   */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Message Me
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded"
              ></textarea>
              <button type="submit" className="bg-black hover:bg-blue-700 ">
                <span className="bg-gray-800 text-white hover:bg-gray-700 p-3 rounded transition duration-300 ease-in-out">
                  Send Message
                </span>
              </button>
            </form>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Contact Me
            </h3>
            <p className="mb-6 text-gray-700">
              Always available for freelance work if the right project comes
              along. Feel free to contact me!
            </p>
            <div className="flex items-center mb-4">
              <i className="fas fa-user text-purple-500 mr-2"></i>
              <span className="text-gray-700">Anupam Kumar</span>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-map-marker-alt text-purple-500 mr-2"></i>
              <span className="text-gray-700">Jaipur (RAJ), INDIA.</span>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-phone text-purple-500 mr-2"></i>
              <span className="text-gray-700">+91 9304285473</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-purple-500 mr-2"></i>
              <span className="text-gray-700">Anupamkumar7802@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
