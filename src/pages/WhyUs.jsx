import React from "react";
import { FaPiggyBank, FaChartLine, FaSmile, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaPiggyBank className="text-4xl text-blue-600" />,
    title: "Secure Investment",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores.",
  },
  {
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    title: "Instant Trading",
    description:
      "Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.",
  },
  {
    icon: <FaSmile className="text-4xl text-blue-600" />,
    title: "Happy Customers",
    description:
      "Voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae.",
  },
  {
    icon: <FaHeadset className="text-4xl text-blue-600" />,
    title: "24/7 Support",
    description:
      "Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? Reiciendis possimus animi autem natus.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
       <h2 className="text-[2rem] font-bold text-dark  text-center pb-10">
            <span className="text-[#0C0C0C]">Why Choose </span>{" "}
            <span className="text-[#00BBF0]">Us</span>
          </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border rounded-lg shadow hover:shadow-md transform hover:scale-105 transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
