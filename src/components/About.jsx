const About = () => {
  return (
    <section id="about" className="py-20 bg-[#00204a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-[#00D4FF]">Us</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Magni quod blanditiis non minus sed aut voluptatum illum quisquam
            aspernatur ullam vel beatae rerum ipsum voluptatibus
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/about-img.png"
              alt="About Us"
              className="w-full h-auto -lg"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#00D4FF] mb-6">
              We Are Finexo
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              Molestiae odio earum non qui cumque provident voluptates,
              repellendus exercitationem, possimus at iste corrupti officiis
              unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab
              omnis quasi expedita.
            </p>
            <a
              href="#"
              className="inline-block bg-[#00D4FF] text-white px-8 py-3 -full text-lg font-medium hover:bg-opacity-90 transition-all uppercase tracking-wide"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
