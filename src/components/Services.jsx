const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-8 -lg shadow-lg text-center">
    <div className="w-20 h-20 mx-auto mb-6 text-dark bg-light -lg flex items-center justify-center">
      <img src={Icon} alt={title} className="w-12 h-12" />
    </div>
    <h5 className="text-xl font-semibold text-dark mb-4">{title}</h5>
    <p className="text-gray-600 mb-6">{description}</p>
    <a
      href="#"
      className="text-accent hover:text-dark transition-colors inline-flex items-center"
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
    <section id="services" className="py-20 bg-light relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-accent text-white px-8 py-3 text-lg font-medium hover:bg-dark transition-all"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
