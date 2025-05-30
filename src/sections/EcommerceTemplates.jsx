import React from 'react';

const ecommerceTemplates = [
  {
    title: 'Creative Portfolio Theme',
    image: '/images/sb1.jpg',
    price: '$59',
    author: 'ThemeCrafter',
    rating: 4.5,
  },
  {
    title: 'eCommerce Pro Theme',
    image: '/images/sb2.png',
    price: '$49',
    author: 'WebGenius',
    rating: 4.8,
  },
  {
    title: 'Business Agency Theme',
    image: '/images/sb3.jpg',
    price: '$39',
    author: 'DesignHub',
    rating: 4.3,
  },
  // Add more themes as needed
];

const EcommerceTemplates = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#0C0C0C] mb-8">
          eCommerce Templates
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Discover a wide variety of high-quality eCommerce Templates built for any purpose. Whether you need a portfolio, blog, or online store – we’ve got you covered.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecommerceTemplates.map((theme, index) => (
            <div key={index} className="bg-[#f8f8f9] p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <img src={theme.image} alt={theme.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-[#0C0C0C] mb-2">{theme.title}</h3>
              <p className="text-sm text-gray-500 mb-1">By {theme.author}</p>
              <p className="text-[#00BBF0] font-bold mb-2">{theme.price}</p>
              <p className="text-yellow-500">⭐ {theme.rating} / 5</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceTemplates;
