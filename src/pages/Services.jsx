import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const services = [
  {
    title: 'WordPress Themes',
    description: 'Thousands of WordPress themes',
    icon: '/images/wordpress icon.svg',
    image: '/images/sb1.jpg',
  },
  {
    title: 'eCommerce Templates',
    description: 'Beautiful website templates',
    icon: '/images/ecom icon.svg',
    image: '/images/sb2.png',
  },
  {
    title: 'Site Templates',
    description: 'HTML and website templates',
    icon: '/images/site temp icon.svg',
    image: '/images/sb3.jpg',
  },
  {
    title: 'Marketing Templates',
    description: 'Email, landing, and marketing templates',
    icon: '/images/marketing temp icon.svg',
    image: '/images/sb4.png',
  },
  {
    title: 'CMS Templates',
    description: 'Templates for popular CMS platforms',
    icon: '/images/cms icon.svg',
    image: '/images/sb5.jpg',
  },
  {
    title: 'Blogging',
    description: 'Themes and templates for blogs',
    icon: '/images/blogging icon.svg',
    image: '/images/sb6.png',
  },
];

const ServiceCard = ({ title, description, icon, image }) => {
  const isWordPress = title === 'WordPress Themes';
  const cardContent = (
    <div className="service-outer group transition-all duration-300 rounded-xl bg-[#f8f8f9] p-6 md:p-8 cursor-pointer hover:shadow-2xl relative z-0">
      <div className="relative">
        <h5 className="text-xl text-center font-bold text-[#1B0E41] mt-6 mb-2">{title}</h5>
        <p className="text-[#1B0E41] text-center mb-4">{description}</p>
        <div className="flex justify-center gap-6 text-sm text-[#00BBF0] font-semibold">
          <a href="#" className="hover:underline">Newest</a>
          <a href="#" className="hover:underline">Bestsellers</a>
        </div>
        <div className="service-content group-hover:-translate-y-4 transition-transform duration-300">
          <div className="flex justify-center mt-12 mb-4 relative z-20">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-100">
              <img src={icon} alt={title} className="w-10 h-10" />
            </div>
          </div>
          <div className="mt-[-2.5rem] shadow-xl rounded-lg overflow-hidden bg-white relative z-10">
            <img src={image} alt={title} className="w-full h-36 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
  return isWordPress ? (
    <Link to="/wordpress-templates">{cardContent}</Link>
  ) : cardContent;
};

const Services = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase()) ||
    service.description.toLowerCase().includes(search.toLowerCase())
  );

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredServices.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill in all fields before submitting.',
        icon: 'warning',
        confirmButtonColor: '#00BBF0',
        background: '#ffffff',
        customClass: {
          title: 'text-[#1B0E41]',
          content: 'text-gray-600',
          confirmButton: 'bg-[#00BBF0] hover:bg-[#009ec3]'
        }
      });
      return;
    }

    // Show success message
    Swal.fire({
      title: 'Request Submitted!',
      text: 'Thank you for your interest. We will contact you shortly.',
      icon: 'success',
      confirmButtonColor: '#00BBF0',
      background: '#ffffff',
      customClass: {
        title: 'text-[#1B0E41]',
        content: 'text-gray-600',
        confirmButton: 'bg-[#00BBF0] hover:bg-[#009ec3]'
      }
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    // Previous button
    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${currentPage === 1
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-[#00BBF0] text-white hover:bg-[#009ec3]'
          }`}
      >
        Previous
      </button>
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-md mx-1 ${currentPage === i
            ? 'bg-[#00BBF0] text-white'
            : 'bg-white text-[#1B0E41] hover:bg-gray-100'
            }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    buttons.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${currentPage === totalPages
          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
          : 'bg-[#00BBF0] text-white hover:bg-[#009ec3]'
          }`}
      >
        Next
      </button>
    );

    return buttons;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[540px] flex items-center justify-center text-white text-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B0E41] via-[#00BBF0]/80 to-[#1B0E41] opacity-90" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight text-white pb-5 font-Playfair">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl md:text-xl mb-8 pb-5">
            Comprehensive web solutions tailored to your business needs
          </p>
          <a
            href="#services"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1B0E41] transition px-6 py-3 text-lg rounded-lg hover:shadow-lg"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#f8f8f9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1B0E41]">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {getCurrentPageItems().map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {renderPaginationButtons()}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#f8f8f9] rounded-2xl shadow-xl p-8 md:p-12 border border-[#00BBF0]/10">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#1B0E41]">
              Request a Service
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1B0E41] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-[#1B0E41] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#1B0E41] mb-2">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="mobile-development">Mobile Development</option>
                </select>
              </div>
              <div>
                <label className="block text-[#1B0E41] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white"
                  rows="6"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#00BBF0] hover:bg-[#009ec3] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
