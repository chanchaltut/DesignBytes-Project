import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setIsSticky(rect.bottom <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      title: "Featured Themes",
      subtitle: "Hand-picked premium themes for your next project",
      type: "grid",
      items: [
        {
          title: "Modern Portfolio",
          image: "/images/sb1.jpg",
          price: "$49",
          sales: "2.3k"
        },
        {
          title: "E-commerce Pro",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
          price: "$39",
          sales: "1.8k"
        },
        {
          title: "Creative Agency",
          image: "/images/sb2.png",
          price: "$59",
          sales: "2.1k"
        },
        {
          title: "Business Suite",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
          price: "$69",
          sales: "1.5k"
        },
        {
          title: "Blog Master",
          image: "/images/sb3.jpg",
          price: "$35",
          sales: "2.4k"
        },
        {
          title: "Shop Template",
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
          price: "$45",
          sales: "1.9k"
        },
        {
          title: "Startup Kit",
          image: "/images/sb4.png",
          price: "$79",
          sales: "1.7k"
        },
        {
          title: "Marketing Pro",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
          price: "$55",
          sales: "2.0k"
        }
      ]
    },
    {
      title: "Trending Now",
      subtitle: "What's hot in the marketplace",
      type: "scroll",
      items: [
        {
          title: "Modern Portfolio",
          image: "/images/sb6.png",
          price: "$59",
          rating: 4.8
        },
        {
          title: "Business Theme",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
          price: "$49",
          rating: 4.9
        },
        {
          title: "Creative Agency",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
          price: "$69",
          rating: 4.7
        },
        {
          title: "Startup Template",
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
          price: "$39",
          rating: 4.6
        },
        {
          title: "Corporate Theme",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
          price: "$79",
          rating: 4.9
        }
      ]
    },
    {
      title: "Special Offers",
      subtitle: "Limited time deals you don't want to miss",
      type: "featured",
      items: [
        {
          title: "Mega Bundle Deal",
          image: "/images/sb5.jpg",
          price: "$199",
          originalPrice: "$499",
          description: "Get 10 premium themes at an unbeatable price",
          badge: "Save 60%"
        },
        {
          title: "Flash Sale",
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
          price: "$29",
          originalPrice: "$99",
          description: "24 hours only - Don't miss out!",
          badge: "Limited Time"
        }
      ]
    },
    {
      title: "Popular Categories",
      subtitle: "Browse through our most popular categories",
      type: "categories",
      items: [
        {
          title: "WordPress",
          image: "/images/wordpress icon.svg",
          count: "2.5k+",
          color: "#21759B"
        },
        {
          title: "eCommerce",
          image: "/images/ecom icon.svg",
          count: "1.8k+",
          color: "#FF6B6B"
        },
        {
          title: "Marketing",
          image: "/images/marketing temp icon.svg",
          count: "1.2k+",
          color: "#4ECDC4"
        },
        {
          title: "Blogging",
          image: "/images/blogging icon.svg",
          count: "950+",
          color: "#45B7D1"
        }
      ]
    },
    {
      title: "Most Downloaded",
      subtitle: "Our most popular themes this month",
      type: "stats",
      items: [
        {
          title: "Corporate Theme",
          image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500",
          price: "$79",
          downloads: "15.2k",
          rating: 4.9
        },
        {
          title: "Portfolio Template",
          image: "/images/sb1.jpg",
          price: "$45",
          downloads: "12.8k",
          rating: 4.8
        },
        {
          title: "Blog Theme",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500",
          price: "$35",
          downloads: "10.5k",
          rating: 4.7
        },
        {
          title: "Shop Template",
          image: "/images/sb2.png",
          price: "$55",
          downloads: "9.3k",
          rating: 4.6
        }
      ]
    },
    {
      title: "Theme Collections",
      subtitle: "Curated sets of themes for specific needs",
      type: "collections",
      items: [
        {
          title: "Business Bundle",
          image: "/images/sb3.jpg",
          price: "$149",
          items: 5,
          description: "Complete set of business themes"
        },
        {
          title: "Creative Pack",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
          price: "$129",
          items: 4,
          description: "Perfect for creative professionals"
        },
        {
          title: "E-commerce Suite",
          image: "/images/sb4.png",
          price: "$199",
          items: 6,
          description: "Everything you need for online stores"
        }
      ]
    }
  ];

  const renderSection = (section, index) => {
    switch (section.type) {
      case "grid":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {item.sales} sales
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-[#00BBF0] font-bold mt-2">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "featured":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="relative overflow-hidden rounded-xl shadow-xl group">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {item.badge}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg mb-6 opacity-90">{item.description}</p>
                    <div className="flex items-center gap-6">
                      <span className="text-3xl font-bold">{item.price}</span>
                      <span className="text-xl text-gray-300 line-through">{item.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "categories":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {section.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="group p-4 rounded-xl transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  >
                    <img src={item.image} alt={item.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-gray-600">{item.count} Items</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "scroll":
        return (
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex-none w-80 snap-center">
                  <div className="relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {item.rating} ★
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-[#00BBF0] font-bold mt-2 text-lg">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "stats":
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="group">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00BBF0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {item.rating} ★
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold group-hover:text-[#00BBF0] transition-colors duration-300">{item.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-[#00BBF0] font-bold">{item.price}</p>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#00BBF0]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <p className="text-gray-600 text-sm">{item.downloads} downloads</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "collections":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50">
                    <div className="absolute bottom-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-lg mb-6 opacity-90">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{item.price}</span>
                        <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                          {item.items} themes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section ref={heroRef} className="hero-section h-[100vh] bg-[url('/images/tech-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="hero-content hidden md:block relative z-10">
          <div
            className={`search-container${isSticky ? ' sticky-search' : ''}`}
            id="searchBar"
            style={{
              position: isSticky ? 'fixed' : 'relative',
              top: isSticky ? 0 : 'auto',
              left: 0,
              right: 0,
              zIndex: isSticky ? 20 : 'auto',
              width: '100%',
              transition: 'all 0.3s ease-in-out',
              background: 'none',
            }}
          >
            <select className="category-dropdown">
              <option value="" defaultValue>Category</option>
              <option value="restaurants">Restaurants</option>
              <option value="retail">Retail</option>
              <option value="services">Services</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
            </select>
            <input
              type="text"
              className="search-input"
              placeholder="Enter Keywords?"
            />
            <button className="search-btn">
              <i className="fas fa-search search-icon"></i>
            </button>
          </div>
          <div className="filter-tags">
            <button className="filter-tag active">All</button>
            <button className="filter-tag">Restaurants</button>
            <button className="filter-tag">Retail</button>
            <button className="filter-tag">Services</button>
            <button className="filter-tag">Healthcare</button>
            <button className="filter-tag">Finance</button>
          </div>
        </div>
      </section>

      {/* Multiple Sections */}
      {sections.map((section, index) => (
        <section key={index} className={`py-12 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#0C0C0C] mb-3 transform transition-all duration-500 hover:scale-105">{section.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{section.subtitle}</p>
            </div>

            {renderSection(section, index)}
          </div>
        </section>
      ))}

      {/* Custom styles */}
      <style jsx>{`
        .hero-content {
          max-width: 800px;
          margin: 2rem auto 0 auto;
          transition: all 0.3s ease-in-out;
        }
        .sticky-search {
          position: fixed !important;
          top: 0 !important;
          left: 0;
          right: 0;
          z-index: 20;
          width: 100vw;
          background: none !important;
          border-radius: 0;
          animation: slideDown 0.3s ease-out;
          backdrop-filter: none;
        }
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @media (max-width: 767px) {
          .hero-content { display: none; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </div>
  );
};

export default Hero; 