import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowSearch(scrollPosition >= windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "WHY US", href: "/whyus" },
    { name: "TEAM", href: "/team" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50 px-[1.5rem]">
        <div className="flex items-center justify-between h-[4rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/DBlogo.png"
              alt="DesignBytes Logo"
              className="h-[3.25rem] w-auto"
            />
          </Link>

          {/* Search Section - Only visible after scrolling */}
          {showSearch && (
            <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
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
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[1rem] px-[20px] py-[5px] text-[#007bff] hover:text-[#00D4FF] transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center">
              <Link
                to="/login"
                className="flex items-center space-x-1 text-[#007bff] hover:text-[#00D4FF] px-6 py-2 hover:bg-opacity-90 transition-all"
              >
                <i className="fas fa-user text-sm"></i>
                <span className="font-normal">LOGIN</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-6 h-6 relative focus:outline-none"
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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[60vw] bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="pt-20 px-6">
          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search themes, templates, and more..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-6 pl-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent"
            />
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-3 text-base font-normal text-gray-600 hover:text-[#00D4FF] transition-colors border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 pt-6">
            <Link
              to="/login"
              className="flex items-center justify-center space-x-1 bg-[#00D4FF] text-white px-6 py-3 hover:bg-opacity-90 transition-all rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-user text-sm"></i>
              <span className="font-normal">LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
