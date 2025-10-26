import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Project Manager, Doha Metro",
    image: "https://i.pravatar.cc/100?img=3",
    quote:
      "ZEAL-IT delivered exceptional manpower support for our metro construction phase. Their professionalism and skill level exceeded expectations.",
  },
  {
    name: "Sophia Martinez",
    role: "HR Lead, Infrastructure Group",
    image: "https://i.pravatar.cc/100?img=5",
    quote:
      "Working with ZEAL-IT was effortless. Their team ensured smooth operations and provided exactly the workforce we needed on time.",
  },
  {
    name: "John Peterson",
    role: "Construction Head, Al Noor Builders",
    image: "https://i.pravatar.cc/100?img=7",
    quote:
      "Highly reliable manpower solutions — safe, skilled, and professional. ZEAL-IT is our go-to partner for large-scale projects.",
  },
  {
    name: "Fatima Al Suwaidi",
    role: "Operations Director, Qatar Ports",
    image: "https://i.pravatar.cc/100?img=8",
    quote:
      "Their workers are safety-trained and efficient. ZEAL-IT has set a benchmark for manpower quality in the region.",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          What Our <span className="text-orange-500">Clients Say</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Our clients trust us for quality, reliability, and professionalism.
        </p>
      </div>

      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] md:min-w-[400px] bg-white shadow-lg rounded-2xl border border-gray-100 p-6 text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full border-4 border-orange-500/30 mb-4"
            />
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
            <h4 className="font-semibold text-gray-900">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSlider;
