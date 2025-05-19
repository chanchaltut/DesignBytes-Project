import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "WHY US", href: "/whyus" }, // match Route path casing
  { name: "TEAM", href: "/team" },
];


  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsVisible(window.scrollY <= heroHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-white shadow-md fixed w-full z-50 px-[1.5rem] transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between h-[4rem]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/DBlogo.png"
            alt="DesignBytes Logo"
            className="h-[3.25rem] w-auto"
          />
        </Link>

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
              to="/"
              className="flex items-center space-x-1 text-[#007bff] hover:text-[#00D4FF] px-6 py-2 hover:bg-opacity-90 transition-all"
            >
              <i className="fas fa-user text-sm"></i>
              <span className="font-normal">LOGIN</span>
            </Link>
            <button className="text-gray-600 hover:text-[#00D4FF] transition-colors">
              <i className="fas fa-search text-lg"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-[#00D4FF] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block py-2 text-base font-normal text-gray-600 hover:text-[#00D4FF] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 pt-4">
            <Link
              to="/"
              className="flex items-center justify-center space-x-1 bg-[#00D4FF] text-white px-6 py-2 hover:bg-opacity-90 transition-all"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-user text-sm"></i>
              <span className="font-normal">LOGIN</span>
            </Link>
            <button
              className="text-gray-600 hover:text-[#00D4FF] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-search text-lg"></i>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
