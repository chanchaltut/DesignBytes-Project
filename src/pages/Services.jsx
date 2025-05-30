import { useState } from 'react';
import WordPressThemes from '../sections/WordPressThemes';
import EcommerceTemplates from '../sections/EcommerceTemplates';
import SiteTemplates from '../sections/SiteTemplates';
import MarketingTemplates from '../sections/MarketingTemplates';
import CMSTemplates from '../sections/CMSTemplates';
import Blogging from '../sections/Blogging';

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

const serviceComponents = {
  'WordPress Themes': WordPressThemes,
  'eCommerce Templates': EcommerceTemplates,
  'Site Templates': SiteTemplates,
  'Marketing Templates': MarketingTemplates,
  'CMS Templates': CMSTemplates,
  'Blogging': Blogging,
};

const ServiceCard = ({ title, description, icon, image }) => (
  <div className="service-outer group transition-all duration-300 rounded-xl bg-[#f8f8f9] p-6 md:p-8 cursor-pointer hover:shadow-2xl relative z-0">
    <div className="relative">
      <h5 className="text-xl text-center font-bold text-[#0C0C0C] mt-6 mb-2">{title}</h5>
      <p className="text-[#0C0C0C] text-center mb-4">{description}</p>
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

const Services = () => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeService, setActiveService] = useState(null);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return services.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-[#00BBF0] text-white hover:bg-[#009ec3]'
        }`}
      >
        Previous
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-md mx-1 ${
            currentPage === i
              ? 'bg-[#00BBF0] text-white'
              : 'bg-white text-[#0C0C0C] hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      );
    }

    buttons.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-[#00BBF0] text-white hover:bg-[#009ec3]'
        }`}
      >
        Next
      </button>
    );

    return buttons;
  };

  const SelectedComponent = serviceComponents[activeService];

  return (
    

    <section id="services" className="py-20 bg-[#f4f6fa] relative z-0">
      <div className="container mx-auto px-4">
        {!activeService ? (
          <>
            <div className="text-center mb-16">
              <h2 className="text-[2rem] font-bold text-dark">
                <span className="text-[#0C0C0C]">Our</span>{' '}
                <span className="text-[#00BBF0]">Services</span>
              </h2>
              <p className="text-[#0C0C0C] mx-auto max-w-xl">
                Explore our wide range of professional templates and themes for every need.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentPageItems().map((service) => (
                <div
                  key={service.title}
                  onClick={() => setActiveService(service.title)}
                  className="cursor-pointer"
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-12">
              {renderPaginationButtons()}
            </div>
          </>
        ) : (
          <div>
            <button
              className="mb-6 px-4 py-2 bg-[#00BBF0] text-white rounded-md hover:bg-[#009ec3]"
              onClick={() => setActiveService(null)}
            >
              ← Back to Services
            </button>
            {SelectedComponent ? (
              <SelectedComponent />
            ) : (
              <p className="text-center text-red-600">Component not found.</p>
            )}
          </div>
        )}
      </div>

      {/* Custom styles for hover effects */}
      <style jsx>{`
        .service-outer:hover {
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18);
        }
        .service-content {
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Services;
