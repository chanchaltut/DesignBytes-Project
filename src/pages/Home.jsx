const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[540px] flex items-center justify-center text-white text-center overflow-hidden">
                {/* Background image with gradient overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B0E41] via-[#00BBF0]/80 to-[#1B0E41] opacity-90" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-4 max-w-3xl">
                    <h1 className="text-5xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight text-white pb-5 font-Playfair">
                        Welcome to Design Byte
                    </h1>
                    <p className="text-lg sm:text-xl md:text-xl mb-8 pb-5">
                        Your one-stop destination for premium templates and custom web development solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/templates"
                            className="inline-block bg-[#00BBF0] hover:bg-[#009ec3] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Explore Templates
                        </a>
                        <a
                            href="/contact"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1B0E41] transition px-6 py-3 text-lg rounded-lg hover:shadow-lg"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gradient-to-br from-white to-[#00BBF0]/5">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#1B0E41]">
                        Why Choose Design Byte?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#00BBF0]/10">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">Beautiful Templates</h3>
                            <p className="text-gray-600">Professionally designed templates that make your website stand out</p>
                        </div>
                        <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#00BBF0]/10">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">Custom Development</h3>
                            <p className="text-gray-600">Tailored solutions to meet your specific business needs</p>
                        </div>
                        <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#00BBF0]/10">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">24/7 Support</h3>
                            <p className="text-gray-600">Round-the-clock assistance for all your queries and concerns</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="relative py-20 text-white overflow-hidden min-h-[440px]">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B0E41] via-[#00BBF0]/80 to-[#1B0E41] opacity-90" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-extrabold mb-4 text-white pb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-6 pb-8">
                        Choose from our premium templates or let us create a custom solution for you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/templates"
                            className="bg-[#00BBF0] hover:bg-[#009ec3] text-white font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Browse Templates
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 hover:bg-white/10"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home; 