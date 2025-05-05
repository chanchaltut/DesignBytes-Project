import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00204a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h4 className="text-xl text-white font-bold mb-6">Address</h4>
            <div className="space-y-4">
              <p className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1.5 mr-3"></i>
                Location
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone-alt mr-3"></i>
                Call +01 1234567890
              </p>
              <p className="flex items-center">
                <i className="far fa-envelope mr-3"></i>
                demo@gmail.com
              </p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-[#00D4FF]">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-[#00D4FF]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-[#00D4FF]">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-[#00D4FF]">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Info Section */}
          <div>
            <h4 className="text-xl text-white font-bold mb-6">Info</h4>
            <p className="text-gray-300">
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-xl text-white font-bold mb-6">Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#00D4FF]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00D4FF]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D4FF]">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#00D4FF]">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#00D4FF]">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h4 className="text-xl text-white font-bold mb-6">Subscribe</h4>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 bg-white bg-opacity-10 border border-gray-600  focus:outline-none focus:border-[#00D4FF]"
              />
              <button className="w-full bg-[#00D4FF] text-white py-2 px-6  hover:bg-opacity-90 transition-all uppercase font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
