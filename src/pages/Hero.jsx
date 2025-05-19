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

  return (
    <section ref={heroRef} className="hero-section h-[100vh] bg-[url('/images/tech-bg.jpg')] bg-cover bg-center">
      {/* Desktop & non-mobile search-container and filter-tags */}
      <div className="hero-content hidden md:block">
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
      {/* Custom styles for sticky search container */}
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
      `}</style>
    </section>
  );
};

export default Hero; 