import React from "react";
import  { useState } from 'react';
const About = () => {
   const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <section className="relative min-h-[540px] flex items-center justify-center text-white text-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 ">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000"
            alt="Background"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-00 to-gray-900 opacity-90" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight text-white pb-5 font-Playfair">
            About Design Byte
          </h1>
          <p className="text-lg sm:text-xl md:text-xl mb-8 pb-5">
            Crafting Digital Experiences — Free Templates, Premium Solutions,
            and Custom Web Development.
          </p>
          <a
            href="#about"
            className="inline-block border border-white text-white hover:bg-white hover:text-gray-900 transition px-6 py-3 text-lg rounded"
          >
            Explore Our Story
          </a>
        </div>
      </section>

      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Design Byte Team"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 pt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              <span className="border-b-4 border-red-500 pb-1">Who </span>
              <span>we are </span>
            </h2>
            <p className="text-gray-700 mb-4 pt-4">
              At{" "}
              <span className="text-blue-600 font-semibold">Design Byte</span>,
              we're a collective of passionate designers and developers
              dedicated to creating digital experiences that inspire and
              perform.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in 2015, we've grown from a small design studio to a
              full-service digital agency serving clients worldwide. Our journey
              has been fueled by a commitment to excellence and a love for
              beautiful, functional design.
            </p>
            <p className="text-gray-700 mb-6">
              We bridge the gap between aesthetics and technology, offering{" "}
              <strong>free and premium templates</strong> for those who prefer
              ready-made solutions, and{" "}
              <strong>custom development services</strong> for businesses
              needing tailored digital experiences.
            </p>

            {/* CEO Info */}
            <div className="flex items-center mt-4 ">
              <img
                src="https://randomuser.me/api/portraits/women/43.jpg"
                alt="CEO"
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h6 className="font-semibold text-gray-900">Sarah Johnson</h6>
                <p className="text-sm text-gray-500">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white ">
        <div className="max-w-6xl mx-auto px-4  ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 ">0+</h3>
              <p className="text-gray-500 ">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">0+</h3>
              <p className="text-gray-500">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">0+</h3>
              <p className="text-gray-500">Free Templates</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">0</h3>
              <p className="text-gray-500 pb-20">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-blue-900 text-white overflow-hidden  min-h-[440px]">
        <div className="absolute inset-0 ">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000"
            alt="Background"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-00 to-gray-900 opacity-90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-white pb-6">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl mb-6 pb-8">
            Whether you need a ready-made template or a custom digital solution,
            we're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition transform hover:-translate-y-1"
            >
              Start Your Project
            </button>
            <a
              href="/templates"
              className="border border-white text-white font-semibold py-3 px-6 rounded transition transform hover:-translate-y-1"
            >
              Browse Templates
            </a>
          </div>
        </div>
      </section>
      {/* Popup Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg relative shadow-lg">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Start Your Project
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700">Type of Template</label>
                <select className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Portfolio</option>
                  <option>Business</option>
                  <option>eCommerce</option>
                  <option>Blog</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="4"
                  placeholder="Describe your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
             </div>
        </div>
      )}

    </>
  );
};

export default About;
