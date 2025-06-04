import React, { useState } from "react";
import { FaPiggyBank, FaChartLine, FaSmile, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaPiggyBank className="text-4xl text-[#00BBF0]" />,
    title: "Cost-Effective Solutions",
    description:
      "We offer both free and premium templates, ensuring you get the best value for your investment. Our pricing is transparent and competitive.",
  },
  {
    icon: <FaChartLine className="text-4xl text-[#00BBF0]" />,
    title: "Rapid Development",
    description:
      "Our pre-built templates and components help you launch your website quickly without compromising on quality or functionality.",
  },
  {
    icon: <FaSmile className="text-4xl text-[#00BBF0]" />,
    title: "Satisfied Clients",
    description:
      "Join our growing list of happy clients who have transformed their online presence with our templates and development services.",
  },
  {
    icon: <FaHeadset className="text-4xl text-[#00BBF0]" />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always ready to help you with any questions or issues you might have with our products.",
  },
];

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
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B0E41] via-[#00BBF0]/80 to-[#1B0E41] opacity-90" />
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
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 pt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              <span className="border-b-4 border-[#00BBF0] pb-1">Who </span>
              <span>we are </span>
            </h2>
            <p className="text-gray-700 mb-4 pt-4">
              At{" "}
              <span className="text-[#00BBF0] font-semibold">Design Byte</span>,
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
              <strong className="text-[#00BBF0]">free and premium templates</strong> for those who prefer
              ready-made solutions, and{" "}
              <strong className="text-[#00BBF0]">custom development services</strong> for businesses
              needing tailored digital experiences.
            </p>

            {/* CEO Info */}
            <div className="flex items-center mt-4 bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-[#00BBF0]/20">
              <img
                src="https://randomuser.me/api/portraits/women/43.jpg"
                alt="CEO"
                className="w-14 h-14 rounded-full mr-4 border-2 border-[#00BBF0]"
              />
              <div>
                <h6 className="font-semibold text-gray-900">Sarah Johnson</h6>
                <p className="text-sm text-[#00BBF0]">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-white to-[#00BBF0]/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[2rem] font-bold text-center pb-10">
            <span className="text-[#1B0E41]">Why Choose </span>
            <span className="text-[#00BBF0]">Us</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-[#00BBF0]/10"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10">
              <h3 className="text-4xl font-bold text-[#00BBF0]">0+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10">
              <h3 className="text-4xl font-bold text-[#00BBF0]">0+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10">
              <h3 className="text-4xl font-bold text-[#00BBF0]">0+</h3>
              <p className="text-gray-600">Free Templates</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10">
              <h3 className="text-4xl font-bold text-[#00BBF0]">0</h3>
              <p className="text-gray-600 pb-20">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 text-white overflow-hidden min-h-[440px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B0E41] via-[#00BBF0]/80 to-[#1B0E41] opacity-90" />
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
              className="bg-[#00BBF0] hover:bg-[#009ec3] text-white font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
            <a
              href="/templates"
              className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 hover:bg-white/10"
            >
              Browse Templates
            </a>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-lg relative shadow-xl">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-[#00BBF0] text-xl transition-colors"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-[#1B0E41]">
              Start Your Project
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700">Type of Template</label>
                <select className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent">
                  <option>Portfolio</option>
                  <option>Business</option>
                  <option>eCommerce</option>
                  <option>Blog</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent"
                  rows="4"
                  placeholder="Describe your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#00BBF0] hover:bg-[#009ec3] text-white font-semibold py-2 px-6 rounded-lg transition shadow-md hover:shadow-lg"
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
