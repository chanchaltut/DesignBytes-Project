import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission to your backend
        Swal.fire({
            title: "Message Sent!",
            text: "Thank you for contacting us. We'll get back to you soon.",
            icon: "success",
            confirmButtonColor: "#00BBF0",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-4xl text-[#00BBF0]" />,
            title: "Our Location",
            details: "123 Business Street, New York, NY 10001",
        },
        {
            icon: <FaPhone className="text-4xl text-[#00BBF0]" />,
            title: "Phone Number",
            details: "+1 (555) 123-4567",
        },
        {
            icon: <FaEnvelope className="text-4xl text-[#00BBF0]" />,
            title: "Email Address",
            details: "contact@designbyte.com",
        },
        {
            icon: <FaClock className="text-4xl text-[#00BBF0]" />,
            title: "Working Hours",
            details: "Mon - Fri: 9:00 AM - 6:00 PM",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[540px] flex items-center justify-center text-white text-center overflow-hidden">
                {/* Background image with fixed parallax effect */}
                <div
                    className="absolute inset-0 bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1000")',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    {/* Subtle dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-4 max-w-3xl" data-aos="fade-up" data-aos-delay="300">
                    <h1 className="text-5xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight text-white pb-5 font-Playfair" data-aos="fade-down" data-aos-delay="500">
                        Get in Touch
                    </h1>
                    <p className="text-lg sm:text-xl md:text-xl mb-8 pb-5" data-aos="fade-up" data-aos-delay="700">
                        Have questions? We're here to help. Reach out to us and let's start a conversation.
                    </p>
                    <a
                        href="#contact-form"
                        className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1B0E41] transition px-6 py-3 text-lg rounded-lg hover:shadow-lg transform hover:scale-105"
                        data-aos="zoom-in"
                        data-aos-delay="900"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10 text-center hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">Our Location</h3>
                            <p className="text-gray-600">123 Design Street, Creative City, 12345</p>
                        </div>
                        <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10 text-center hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">Email Us</h3>
                            <p className="text-gray-600">contact@designbyte.com</p>
                        </div>
                        <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10 text-center hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="700">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-phone"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">Call Us</h3>
                            <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-16 bg-gradient-to-br from-white to-[#00BBF0]/5">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#00BBF0]/10" data-aos="fade-up" data-aos-delay="300">
                        <h2 className="text-3xl font-bold text-center mb-8 text-[#1B0E41]" data-aos="fade-down" data-aos-delay="500">
                            Send us a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="700">
                                <div>
                                    <label className="block text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="900">
                                <label className="block text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="1100">
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BBF0] focus:border-transparent transition-all"
                                    rows="6"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <div className="text-center" data-aos="zoom-in" data-aos-delay="1300">
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

            {/* Map Section */}
            <section className="h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564750986!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </>
    );
};

export default Contact; 