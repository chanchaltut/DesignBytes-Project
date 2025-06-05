import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      setShowSearch(window.scrollY >= windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/", icon: "fas fa-home" },
    { name: "ABOUT", href: "/about", icon: "fas fa-info-circle" },
    { name: "SERVICES", href: "/services", icon: "fas fa-cogs" },
    { name: "TEAM", href: "/team", icon: "fas fa-users" },
    { name: "CONTACT US", href: "/contact", icon: "fas fa-envelope" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50 px-[1.5rem]">
        <div className="flex items-center justify-between h-[4rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-aos="fade-right">
            <img
              src="/images/DBlogo.png"
              alt="DesignBytes Logo"
              className="h-[3.25rem] w-auto transition-transform duration-300 hover:scale-110"
            />
          </Link>

          {/* Search Section - Only visible after scrolling */}
          {showSearch && (
            <div className="hidden min-[900px]:flex items-center flex-1 max-w-xl mx-8" data-aos="fade-up" data-aos-duration="500">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search themes, templates, and more..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-6 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent transition-all duration-300"
                />
                <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden min-[900px]:flex items-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[1rem] px-[20px] py-[5px] uppercase tracking-wide transition-colors relative group 
                  lg:text-[1rem] lg:px-[20px] lg:py-[5px]
                  min-[900px]:text-[0.875rem] min-[900px]:px-[12px] min-[82px]:py-[4px]
                  ${location.pathname.toLowerCase() === link.href
                    ? 'text-[#00D4FF]'
                    : 'text-[#007bff] hover:text-[#00D4FF]'
                  }`}
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-1 bg-[#00D4FF] rounded-full transform transition-all duration-300 ${location.pathname.toLowerCase() === link.href
                  ? 'animate-slide'
                  : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </Link>
            ))}
            <div className="flex items-center">
              <Link
                to="/login"
                className="flex items-center space-x-1 text-[#007bff] hover:text-[#00D4FF] 
                  lg:py-2
                  min-[900px]:py-1.5
                  transition-all relative group border border-[#007bff] rounded-lg hover:border-[#00D4FF] hover:scale-105"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <span className="font-normal lg:text-[1rem] min-[900px]:text-[0.875rem] px-3">Sign Up / Log In</span>
                <span className="absolute bottom-0 left-0 h-1 bg-[#00D4FF] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="min-[900px]:hidden w-6 h-6 relative focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-[2px] bg-[#007bff] transform transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-[6px]'}`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-[#007bff] transition-all duration-300 ease-in-out
                  ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-[#007bff] transform transition-all duration-300 ease-in-out origin-center
                  ${isOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-[6px]'}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 min-[900px]:hidden z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[60vw] bg-white shadow-lg transform transition-transform duration-300 ease-in-out min-[900px]:hidden z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="pt-8 px-6 flex flex-col">
          {/* Logo at the top */}
          <div className="flex justify-center mb-8">
            <img src="/images/DBlogo.png" alt="DesignBytes Logo" className="h-12 w-auto" />
          </div>
          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search themes, templates, and more..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-6 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <nav className="flex-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`flex items-center gap-3 p-3 text-base font-normal border-b border-gray-100 transition-colors ${location.pathname.toLowerCase() === link.href ? 'text-[#00D4FF] font-bold bg-[#e6f7fd]' : 'text-gray-600 hover:text-[#00D4FF]'}`}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.3s ease-out ${index * 100}ms`
                }}
              >
                <i className={`${link.icon} text-lg`}></i>
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="flex items-center justify-center space-x-1 border border-[#00D4FF] text-[#00D4FF] px-6 py-3 hover:bg-[#00D4FF] hover:text-white transition-all rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-normal">Sign Up / Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
