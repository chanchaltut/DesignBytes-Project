import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const socialLinks = [
  { icon: "fab fa-facebook", href: "#" },
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-linkedin", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Us", href: "/whyus" },
];

const columnTitleClass = "text-[1.5rem] text-white font-bold mb-4";
const linkClass = "hover:text-[#00D4FF]";
const iconClass = "text-white hover:text-[#00D4FF]";

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email address!',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address!',
      });
      return;
    }

    // Success message
    Swal.fire({
      icon: 'success',
      title: 'Subscribed!',
      text: 'Thank you for subscribing to our newsletter!',
      confirmButtonColor: '#00D4FF',
    });
    setEmail('');
  };

  const handleFooterNav = (href) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(href), 350); // allow scroll animation
  };

  return (
    <footer className="bg-[#00204a] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h4 className={columnTitleClass}>Address</h4>
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
              {socialLinks.map(({ icon, href }, idx) => (
                <a key={icon + idx} href={href} className={iconClass}>
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div>
            <h4 className={columnTitleClass}>Info</h4>
            <p className="text-[#ffffff] text-[1rem] w-[14rem]">
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className={columnTitleClass}>Links</h4>
            <ul className="space-y-3">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <button
                    type="button"
                    className={linkClass + " bg-transparent border-0 outline-none cursor-pointer"}
                    onClick={() => handleFooterNav(href)}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h4 className={columnTitleClass}>Subscribe</h4>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full bg-transparent border-0 border-b border-white text-white placeholder-white focus:ring-0 focus:outline-none focus:border-[#00D4FF] py-1 mb-2"
              />
              <button
                type="submit"
                className="w-full bg-[#00D4FF] text-white py-2 px-6 hover:bg-opacity-90 transition-all uppercase font-medium mt-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
