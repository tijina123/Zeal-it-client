import React from "react";
import { motion } from "framer-motion";


const stats = [
  {
    number: "8+",
    title: "Service Divisions",
    description: "Comprehensive solutions across industries",
    gradient: "from-red-500 to-orange-500",
    orbitColor: "bg-orange-500",
  },
  {
    number: "500+",
    title: "Projects Completed",
    description: "Successfully delivered nationwide",
    gradient: "from-orange-500 to-pink-500",
    orbitColor: "bg-pink-500",
  },
  {
    number: "25+",
    title: "Years Experience",
    description: "Building excellence since 1998",
    gradient: "from-pink-500 to-orange-500",
    orbitColor: "bg-orange-500",
  },
  {
    number: "100%",
    title: "Client Satisfaction",
    description: "Committed to quality service",
    gradient: "from-orange-500 to-pink-600",
    orbitColor: "bg-pink-600",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const StatsCircles = () => {
  return (
    <section className="py-16 bg-white font-poppins">
      <div className="flex flex-wrap justify-center gap-20">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
              {/* Outer gradient ring */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-tr ${stat.gradient} opacity-80 animate-pulse`}
              ></div>

              {/* Inner white circle */}
              <div className="absolute w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 font-bold text-2xl z-10">
                {stat.number}
              </div>

              {/* Orbiting small ball */}
              <div className="absolute w-full h-full animate-orbit">
                <div
                  className={`w-3.5 h-3.5 ${stat.orbitColor} rounded-full absolute top-0 left-1/2 -translate-x-1/2`}
                ></div>
              </div>
            </div>

            <h3 className="mt-3 text-base md:text-lg font-semibold text-gray-800 text-center">
              {stat.title}
            </h3>
            <p className="text-center text-gray-500 mt-1 text-sm w-40 md:w-44">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCircles;
