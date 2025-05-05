import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Joseph Brown",
      role: "Marketing Head",
      image: "/images/team-1.jpg",
    },
    {
      name: "Nancy White",
      role: "Marketing Head",
      image: "/images/team-2.jpg",
    },
    {
      name: "Earl Martinez",
      role: "Marketing Head",
      image: "/images/team-3.jpg",
    },
    {
      name: "Josephine Allard",
      role: "Marketing Head",
      image: "/images/team-4.jpg",
    },
  ];

  return (
    <section className="bg-[#00204a] py-20" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-[#00D4FF]">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#00204a] p-6 -lg border border-[#1B0E41]/20"
            >
              <div className="mb-6">
                <div className="w-40 h-40 mx-auto -full overflow-hidden border-4 border-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[#00D4FF] text-xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-white text-sm mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-white hover:text-[#00D4FF]">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#00D4FF]">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#00D4FF]">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#00D4FF]">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-white hover:text-[#00D4FF]">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
