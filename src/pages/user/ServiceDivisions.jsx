import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Recycle, Wrench } from "lucide-react";

// Service data with line breaks + links
const services = [
  {
    icon: <Users size={26} />,
    title: (
      <>
        Manpower Solution <br /> Provider
      </>
    ),
    description: "Skilled workforce solutions tailored to your project needs.",
    link: "/manpower-solution-provider",
  },
  {
    icon: <Building2 size={26} />,
    title: (
      <>
        Real Estate <br /> Division
      </>
    ),
    description: "Premium property development and real estate solutions.",
    link: "/real-estate-division",
  },
  {
    icon: <Recycle size={26} />,
    title: (
      <>
        Recycling <br /> Division
      </>
    ),
    description: "Sustainable waste management for a greener future.",
    link: "/recycling-division",
  },
  {
    icon: <Wrench size={26} />,
    title: (
      <>
        Facility <br /> Management
      </>
    ),
    description: "Comprehensive facility maintenance and management services.",
    link: "/facility-management",
  },
];

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServiceDivisions = () => {
  return (
    <section className="bg-[#f9fafb] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10"
        >
          <div className="inline-block bg-[#fff3f0] text-[#d61a46] px-5 py-1 rounded-full text-sm font-semibold mb-5 border border-[#f4d2cc] shadow-sm">
            What We Do
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#f14b34] mb-3">
            Our Service Divisions
          </h2>

          <p className="text-[#44525f] text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive solutions across multiple industries with unmatched
            expertise
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-left hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-[#f14b34] text-white flex items-center justify-center rounded-lg shadow-sm mb-6 transition-all duration-300 group-hover:bg-[#f97316]">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-semibold text-[#44525f] mb-3 leading-snug group-hover:text-[#f97316] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#44525f] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More */}
                <a
                  href={service.link}
                  className="text-[#d61a46] font-medium text-[15px] flex items-center gap-1 hover:gap-2 transition-all duration-300"
                >
                  Learn More →
                </a>
              </motion.div>
            ))}
          </div>

          {/* View All Services Button */}
          <motion.div
            variants={fadeInVariant}
            className="mt-16 flex justify-center"
          >
            <a
              href="/services"
              className="bg-[#f14b34] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#d61a46] transition-colors duration-300 transform hover:scale-105"
            >
              View All Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDivisions;
