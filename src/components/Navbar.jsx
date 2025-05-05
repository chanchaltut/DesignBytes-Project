import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "WHY US", href: "#why-us" },
    { name: "TEAM", href: "#team" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[4rem]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/images/DBlogo.png"
              alt="DesignBytes Logo"
              className="h-[3.25rem] w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                s
                href={link.href}
                className="text-[1rem] px-[20px] py-[5px] text-[#007bff] hover:text-
                [#00D4FF] transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center">
              <a
                href="#"
                className="flex items-center space-x-1 text-[#007bff] hover:text-
                [#00D4FF] px-6 py-2 -full hover:bg-opacity-90 transition-all"
              >
                <i className="fas fa-user text-sm"></i>
                <span className="font-normal">LOGIN</span>
              </a>
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
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-base font-normal text-gray-600 hover:text-[#00D4FF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#"
                className="flex items-center justify-center space-x-1 bg-[#00D4FF] text-white px-6 py-2 -full hover:bg-opacity-90 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-user text-sm"></i>
                <span className="font-normal">LOGIN</span>
              </a>
              <button
                className="text-gray-600 hover:text-[#00D4FF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <i className="fas fa-search text-lg"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
