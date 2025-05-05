const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="bg-[#f8f8f9] p-8 text-center">
    <div className="w-20 h-20 mx-auto mb-6 text-[#0C0C0C] bg-light flex items-center justify-center">
      <img src={Icon} alt={title} className="w-12 h-12" />
    </div>
    <h5 className="text-xl font-semibold text-[#0C0C0C] mb-4">{title}</h5>
    <p className="text-[#0C0C0C] mb-6">{description}</p>
    <a
      href="#"
      className="text-[#00204a] font-semibold hover:text-dark transition-colors inline-flex items-center"
    >
      Read More
    </a>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "CURRENCY WALLET",
      description:
        "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      icon: "/images/s1.png",
    },
    {
      title: "SECURITY STORAGE",
      description:
        "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      icon: "/images/s2.png",
    },
    {
      title: "EXPERT SUPPORT",
      description:
        "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      icon: "/images/s3.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-light relative my-[12rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[2rem] font-bold text-dark">
            <span className="text-[#0C0C0C]">Our</span> <span className="text-[#00BBF0]">Services</span>
          </h2>
          <p className="text-[#0C0C0C] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <>
              <ServiceCard key={index} {...service} />
              {index === 2 && (
                <div className="w-full flex justify-center col-span-full mt-4">
                  <a
                    href="#"
                    className="inline-block bg-[#00BBF0] text-white px-8 py-3 text-lg hover:bg-[#009ec3] transition-all shadow-md"
                  >
                    View All
                  </a>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
