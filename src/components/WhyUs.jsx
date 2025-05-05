const WhyUsCard = ({ title, description }) => (
  <div className="bg-white p-8 -lg shadow-md">
    <h5 className="text-xl font-semibold text-primary mb-4">{title}</h5>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyUs = () => {
  const reasons = [
    {
      title: "Expert Management",
      description:
        "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.",
    },
    {
      title: "Secure Investment",
      description:
        "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.",
    },
    {
      title: "Instant Trading",
      description:
        "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.",
    },
    {
      title: "Happy Customers",
      description:
        "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.",
    },
  ];

  return (
    <section id="why-us" className="py-16">
      <div className="container">
        <h2 className="section-title text-center">Why Choose Us</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <WhyUsCard key={index} {...reason} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
