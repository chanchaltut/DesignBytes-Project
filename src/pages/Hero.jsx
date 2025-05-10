import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "CRYPTO\nCURRENCY",
      description:
        "Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.",
      image: "/images/slider-img.png",
    },
  ];

  return (
    <section className="relative text-white h-[100vh] bg-gradient-to-br from-[#0e0457] to-[#06014b]">
      <div className="container pt-32 pb-16 md:pb-48 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center p-20 md:p-4">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-[3rem] font-bold uppercase mb-[15px] text-white leading-[3.5rem]">
              CRYPTO
              <br />
              CURRENCY
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-lg font-light">
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque
              magnam fugiat hic? Esse dicta aliquid error repudiandae earum
              suscipit fugiat molestias, veniam, vel architecto veritatis
              delectus repellat modi impedit sequi.
            </p>
            <a
              href="#"
              className="inline-block bg-[#00D4FF] text-white px-6 md:px-8 py-3 text-base md:text-lg font-medium hover:bg-opacity-90 transition-all uppercase tracking-wide"
            >
              Read More
            </a>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 md:mt-0">
            <div className="animate-[float_3s_ease-in-out_infinite]">
              <img
                src="/images/slider-img.png"
                alt="Crypto Currency"
                className="w-full h-auto max-w-sm md:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave background */}
      <div
        className="hidden md:block absolute bottom-[-12rem] left-0 right-0 w-full h-[320px] bg-no-repeat bg-cover bg-bottom"
        style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
      />
    </section>
  );
};

export default Hero;
