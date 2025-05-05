import { FaUserCog, FaKey } from 'react-icons/fa';

const whyUsData = [
  {
    image: "/images/w1.png",
    title: "Expert Management",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
  },
  {
    image: "/images/w2.png",
    title: "Secure Investment",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
  },
  {
    image: "/images/w3.png",
    title: "Instant Trading",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
  },
  {
    image: "/images/w4.png",
    title: "Happy Customers",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
  },
];

const WhyUsCard = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center px-4 py-8">
    <div className="flex items-center justify-center w-32 h-32 md:w-36 md:h-36 border-4 border-[#231a6f] rounded-full mb-6 bg-white">
      <img src={image} alt={title} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-[#1B0E41] mb-4">{title}</h3>
    <p className="text-[#1B0E41] text-base md:text-lg font-normal leading-relaxed">
      {description}
    </p>
  </div>
);

const WhyUs = () => (
  <section id="why-us" className="py-16 bg-white">
    <div className="container">
      <h2 className="section-title text-center mb-12 text-[2rem] md:text-4xl font-bold">
        Why Choose <span className="text-[#00D4FF]">Us</span>
      </h2>
      <div className="flex flex-col items-center gap-8">
        {whyUsData.map((item, idx) => (
          <WhyUsCard key={idx} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
