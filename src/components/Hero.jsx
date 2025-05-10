import { useState, useEffect } from 'react';

const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsSticky(window.scrollY > heroHeight * 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-pattern"></div>
      <div className="hero-content">
        <div className={`search-container ${isSticky ? 'sticky-search' : ''}`} id="searchBar">
          <select className="category-dropdown">
            <option value="" selected>Category</option>
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
  );
};

export default Hero; 