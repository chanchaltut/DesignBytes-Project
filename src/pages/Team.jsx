import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      description: "Visionary leader with 15+ years of experience in digital innovation",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Full-stack developer specializing in modern web technologies",
      social: {
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description: "Creative designer passionate about user-centered design",
      social: {
        dribbble: "#",
        behance: "#"
      }
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill in all fields before submitting.',
        icon: 'warning',
        confirmButtonColor: '#00BBF0',
        background: '#ffffff',
        customClass: {
          title: 'text-[#1B0E41]',
          content: 'text-gray-600',
          confirmButton: 'bg-[#00BBF0] hover:bg-[#009ec3]'
        }
      });
      return;
    }

    // Show success message
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will get back to you soon.',
      icon: 'success',
      confirmButtonColor: '#00BBF0',
      background: '#ffffff',
      customClass: {
        title: 'text-[#1B0E41]',
        content: 'text-gray-600',
        confirmButton: 'bg-[#00BBF0] hover:bg-[#009ec3]'
      }
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[540px] flex items-center justify-center text-white text-center overflow-hidden">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B0E41] via-[#00BBF0]/80 to-[#1B0E41] opacity-90" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight text-white pb-5 font-Playfair">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl md:text-xl mb-8 pb-5">
            Talented professionals dedicated to creating exceptional digital experiences
          </p>
          <a
            href="#team"
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1B0E41] transition px-6 py-3 text-lg rounded-lg hover:shadow-lg"
          >
            View Team
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-[#f8f8f9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1B0E41]">
            Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#00BBF0]/10">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">{member.name}</h3>
                  <p className="text-[#00BBF0] mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-[#00BBF0] hover:text-[#009ec3] transition-colors">
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-[#00BBF0] hover:text-[#009ec3] transition-colors">
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-[#00BBF0] hover:text-[#009ec3] transition-colors">
                        <i className="fab fa-github text-xl"></i>
                      </a>
                    )}
                    {member.social.dribbble && (
                      <a href={member.social.dribbble} className="text-[#00BBF0] hover:text-[#009ec3] transition-colors">
                        <i className="fab fa-dribbble text-xl"></i>
                      </a>
                    )}
                    {member.social.behance && (
                      <a href={member.social.behance} className="text-[#00BBF0] hover:text-[#009ec3] transition-colors">
                        <i className="fab fa-behance text-xl"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#f8f8f9] rounded-2xl shadow-xl p-8 md:p-12 border border-[#00BBF0]/10">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#1B0E41]">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1B0E41] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-[#1B0E41] mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#1B0E41] mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-[#1B0E41] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all bg-white"
                  rows="6"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#00BBF0] hover:bg-[#009ec3] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
