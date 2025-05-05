import { useState, useEffect } from "react";

const TestimonialCard = ({ name, text, image }) => (
  <div className="bg-white p-8 -lg shadow-md">
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 -full overflow-hidden bg-gray-200 mr-4">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            {name[0]}
          </div>
        )}
      </div>
      <div>
        <h6 className="text-lg font-semibold text-primary">{name}</h6>
        <p className="text-accent">magna aliqua. Ut</p>
      </div>
    </div>
    <p className="text-gray-600">{text}</p>
  </div>
);

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "LusDen",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image: "/images/client-1.jpg",
    },
    {
      name: "Zen Court",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image: "/images/client-2.jpg",
    },
    {
      name: "LusDen",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image: "/images/client-1.jpg",
    },
    {
      name: "Zen Court",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      image: "/images/client-2.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="section-title text-center">What says our Customers</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testimonials
            .slice(currentSlide, currentSlide + 2)
            .map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: testimonials.length / 2 }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 -full transition-colors ${
                currentSlide === index * 2 ? "bg-accent" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index * 2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
