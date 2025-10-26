import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-block bg-orange-100 text-orange-600 font-medium px-5 py-2 rounded-full mb-5">
          Why Choose Us
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Building Trust Through{" "}
          <span className="text-orange-500">Excellence</span>
        </h2>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Zeal-it is a diversified conglomerate offering comprehensive solutions
          across multiple sectors with expertise and innovation in every
          project.
        </p>

        <ul className="space-y-4 mb-8">
          {[
            "ISO Certified Quality Standards",
            "Expert Team of Professionals",
            "Sustainable & Eco-friendly Practices",
            "Timely Project Delivery",
            "24/7 Customer Support",
          ].map((item, index) => (
            <li key={index} className="flex items-center text-gray-700 text-lg">
              <CheckCircle className="text-orange-500 mr-3" size={22} />
              {item}
            </li>
          ))}
        </ul>

       <a
  href="/about"
  className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition inline-block"
>
  Learn More About Us
</a>

      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 relative"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="./img1.jpg" // 👈 Replace with actual image path
          alt="Building"
          className="w-full h-150 rounded-2xl shadow-lg object-cover "
        />
        <div className="absolute bottom-4 right-4 bg-gradient-to-r from-red-600 to-orange-500 text-white p-5 rounded-xl shadow-lg">
          <div className="text-4xl font-bold">25+</div>
          <div className="text-sm">Years of Excellence</div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
