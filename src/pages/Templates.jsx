const Templates = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[540px] flex items-center justify-center text-white text-center overflow-hidden">
                {/* Background image with gradient overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B0E41] via-[#00BBF0]/80 to-[#1B0E41] opacity-90" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-4 max-w-3xl">
                    <h1 className="text-5xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight text-white pb-5 font-Playfair">
                        Premium Templates
                    </h1>
                    <p className="text-lg sm:text-xl md:text-xl mb-8 pb-5">
                        Discover our collection of professionally designed templates to kickstart your next project.
                    </p>
                    <a
                        href="#templates"
                        className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1B0E41] transition px-6 py-3 text-lg rounded-lg hover:shadow-lg"
                    >
                        Browse Templates
                    </a>
                </div>
            </section>

            {/* Templates Grid Section */}
            <section id="templates" className="py-16 bg-gradient-to-br from-white to-[#00BBF0]/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#1B0E41]">
                        Choose Your Perfect Template
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {templates.map((template, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#00BBF0]/10"
                            >
                                <img
                                    src={template.image}
                                    alt={template.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">
                                        {template.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{template.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#00BBF0] font-semibold">
                                            {template.price}
                                        </span>
                                        <button className="bg-[#00BBF0] hover:bg-[#009ec3] text-white px-4 py-2 rounded-lg transition-all duration-300">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10 text-center hover:shadow-lg transition-all duration-300">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">Modern Design</h3>
                            <p className="text-gray-600">Clean and contemporary designs that make your website stand out</p>
                        </div>
                        <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10 text-center hover:shadow-lg transition-all duration-300">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">Responsive</h3>
                            <p className="text-gray-600">Perfect display on all devices, from mobile to desktop</p>
                        </div>
                        <div className="p-6 rounded-lg bg-gradient-to-br from-white to-[#00BBF0]/5 border border-[#00BBF0]/10 text-center hover:shadow-lg transition-all duration-300">
                            <div className="text-[#00BBF0] text-3xl mb-4">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1B0E41] mb-2">Clean Code</h3>
                            <p className="text-gray-600">Well-structured and optimized code for better performance</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Templates; 