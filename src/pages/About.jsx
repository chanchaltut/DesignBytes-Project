import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Portfolio",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isFormOpen &&
        formRef.current &&
        !formRef.current.contains(e.target)
      ) {
        setIsFormOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFormOpen]);

  // Validation
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email address.";
    }
    if (!formData.description.trim())
      errs.description = "Description is required.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", type: "Portfolio", description: "" });
      setIsFormOpen(false);
    }
  };
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Digital design expert with 15+ years of experience leading creative teams.",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in React and Node.js applications.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "UX Designer",
      bio: "Passionate about creating intuitive user experiences with measurable results.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Director",
      bio: "Growth strategist focused on digital marketing and brand development.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Design Byte transformed our online presence completely. Their templates saved us months of development time!",
      author: "Jessica Taylor",
      company: "Bloom Cosmetics",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      quote:
        "The custom solution they built for our eCommerce platform increased conversions by 40% in the first month.",
      author: "Robert Williams",
      company: "Urban Outfitters",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: 3,
      quote:
        "Working with Design Byte was seamless from start to finish. Their attention to detail is unmatched.",
      author: "Maria Garcia",
      company: "TechStart Inc.",
      img: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  ];

  return (
    <>
      <section
        className="relative min-h-[650px] flex items-center justify-center text-white text-center bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-blue-00 to-gray-900 opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight text-white pb-5 font-Playfair">
            About Design Byte
          </h1>
          <p className="text-lg sm:text-xl md:text-xl mb-8 pb-5">
            Crafting Digital Experiences — Free Templates, Premium Solutions,
            and Custom Web Development.
          </p>
          <a
            href="#about"
            className="inline-block border border-white text-white hover:bg-white hover:text-gray-900 transition px-6 py-3 text-lg rounded"
          >
            Explore Our Story
          </a>
        </div>
      </section>

      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Design Byte Team"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 pt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              <span className="border-b-4 border-red-500 pb-1">Who </span>
              <span>we are </span>
            </h2>
            <p className="text-gray-700 mb-4 pt-4">
              At{" "}
              <span className="text-blue-600 font-semibold">Design Byte</span>,
              we're a collective of passionate designers and developers
              dedicated to creating digital experiences that inspire and
              perform.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in 2015, we've grown from a small design studio to a
              full-service digital agency serving clients worldwide. Our journey
              has been fueled by a commitment to excellence and a love for
              beautiful, functional design.
            </p>
            <p className="text-gray-700 mb-6">
              We bridge the gap between aesthetics and technology, offering{" "}
              <strong>free and premium templates</strong> for those who prefer
              ready-made solutions, and{" "}
              <strong>custom development services</strong> for businesses
              needing tailored digital experiences.
            </p>

            {/* CEO Info */}
            <div className="flex items-center mt-4 ">
              <img
                src="https://randomuser.me/api/portraits/women/43.jpg"
                alt="CEO"
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h6 className="font-semibold text-gray-900">Sarah Johnson</h6>
                <p className="text-sm text-gray-500">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white ">
        <div className="max-w-6xl mx-auto px-4  ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">
            <div>
              <h3 className="text-4xl font-bold text-blue-600 ">0+</h3>
              <p className="text-gray-500 ">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">0+</h3>
              <p className="text-gray-500">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">0+</h3>
              <p className="text-gray-500">Free Templates</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">0</h3>
              <p className="text-gray-500 pb-20">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* Mission/Vision/Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Principles
          </h2>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === "mission"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "vision"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Vision
              </button>
              <button
                onClick={() => setActiveTab("values")}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === "values"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Values
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            {activeTab === "mission" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-4">
                  To democratize great design by making professional-quality
                  templates accessible to everyone, while providing exceptional
                  custom solutions for businesses that need more.
                </p>
                <p className="text-gray-700">
                  We believe beautiful, functional design shouldn't be limited
                  to those with big budgets. Our mission is to empower creators
                  and businesses of all sizes with tools that help them succeed
                  online.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-4">
                  To become the most trusted name in digital design solutions,
                  recognized for both our accessible templates and our
                  innovative custom work.
                </p>
                <p className="text-gray-700">
                  We envision a world where every online presence—from personal
                  blogs to enterprise platforms—reflects thoughtful,
                  user-centered design principles.
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      <strong>Quality First:</strong> We never compromise on the
                      craftsmanship of our work
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      <strong>Accessibility:</strong> Great design should be
                      available to everyone
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      <strong>Innovation:</strong> We continuously push
                      boundaries in digital experiences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      <strong>Community:</strong> We grow by helping our clients
                      and users succeed
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The creative minds behind Design Byte's success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-43 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear from those we've worked with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16 font-Playfair">
      Our Design Process
    </h2>

    <div className="grid md:grid-cols-2 gap-12">
      {[
        {
          title: "Discovery",
          description:
            "We begin with understanding your business goals and audience through deep consultation.",
          icon: "fas fa-search",
          delay: "0",
        },
        {
          title: "Strategy",
          description:
            "Crafting a tailored game plan to solve user pain-points and align with your vision.",
          icon: "fas fa-chess",
          delay: "100",
        },
        {
          title: "Design",
          description:
            "We bring creativity to life through wireframes, moodboards, and pixel-perfect UI.",
          icon: "fas fa-pencil-ruler",
          delay: "200",
        },
        {
          title: "Development",
          description:
            "Developing scalable, efficient, and mobile-first solutions with clean code.",
          icon: "fas fa-code",
          delay: "300",
        },
        {
          title: "Launch & Support",
          description:
            "We deploy, monitor, and continuously improve your product with proactive support.",
          icon: "fas fa-rocket",
          delay: "400",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 p-8"
        >
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 text-2xl shadow-md">
            <i className={step.icon}></i>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-700 text-base">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-blue-900 text-white overflow-hidden  min-h-[440px]">
        <div className="absolute inset-0 ">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000"
            alt="Background"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-blue-00 to-gray-900 opacity-90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-white pb-6">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl mb-6 pb-8">
            Whether you need a ready-made template or a custom digital solution,
            we're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition transform hover:-translate-y-1"
            >
              Start Your Project
            </button>
            <button
              onClick={() => navigate("/services")}
              className="border border-white text-white font-semibold py-3 px-6 rounded transition transform hover:-translate-y-1"
            >
              Browse Templates
            </button>
          </div>
        </div>
      </section>
      {/* Popup Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={formRef}
            className="bg-white rounded-lg p-8 w-full max-w-lg relative shadow-lg"
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Start Your Project
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Type of Template</label>
                <select
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                >
                  <option>Portfolio</option>
                  <option>Business</option>
                  <option>eCommerce</option>
                  <option>Blog</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="4"
                  placeholder="Describe your project..."
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded transition"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
