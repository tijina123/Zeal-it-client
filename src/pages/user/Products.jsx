import React from "react";
import { motion } from "framer-motion";
import { Wrench, Cog, Zap, Droplets, MapPin, Phone, Mail } from "lucide-react";

const products = [
  {
    name: "PPR, PVC Pipes & Fittings",
    description:
      "High-quality piping systems ensuring durability, leak-proof connections, and resistance to corrosion for plumbing and industrial use.",
    image: "/pro1.jpg",
    color: "bg-teal-600",
    icon: <Droplets className="w-6 h-6 text-white" />,
  },
  {
    name: "Threaded Fittings",
    description:
      "Precision-engineered threaded fittings for strong, secure, and easy-to-install pipeline connections.",
    image: "/pro2.jpg",
    color: "bg-orange-500",
    icon: <Cog className="w-6 h-6 text-white" />,
  },
  {
    name: "PPR Valves",
    description:
      "Durable and efficient PPR valves designed for high-pressure performance and long-term reliability.",
    image: "/pro3.jpg",
    color: "bg-green-600",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
  {
    name: "PPR Welding Machine",
    description:
      "Advanced welding machines ensuring perfect joint fusion for PPR pipes, enhancing installation efficiency and strength.",
    image: "/pro4.jpeg",
    color: "bg-blue-600",
    icon: <Wrench className="w-6 h-6 text-white" />,
  },
];

const clients = [
  { name: "Qatar Steel", logo: "/1.png" },
  { name: "Qatar Petroleum", logo: "/2.png" },
  { name: "Ashghal", logo: "/3.png" },
  { name: "Qatar Gas", logo: "/4.png" },
];

const Products = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* 🔹 Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1A] to-[#1E1E2A] text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="hover:text-orange-400 cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-orange-500">Products</span>
            </div>

            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>Our Products</span>
            </button>

            <h1 className="text-3xl md:text-4xl font-bold">
              Premium Quality PPR & PVC Solutions
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Explore our range of piping products designed for efficiency,
              durability, and superior performance in every environment.
            </p>
          </div>

          <motion.div
            animate={{ rotate: [0, 2, -2, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-[#1C1C28] to-[#0D0D17] shadow-[0_0_40px_rgba(255,100,50,0.2)]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-dashed border-orange-500/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                  <span className="text-2xl font-bold">✦</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔹 About Section */}
      <div className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
            About <span className="text-orange-600">ZEAL-IT MEP Division</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            ZEAL-IT MEP division is a part of ZEAL-IT group and one of the leading
            companies in supplying world-class and high-tech solutions to a growing list of
            satisfied clients. Our qualified, competent and highly skilled engineers comply
            with the latest industry standards of quality, safety, and environmental
            friendliness while using innovative engineering solutions in the following
            areas: Intelligent building management systems, home automation, building
            maintenance, heavy equipment installation, and all mechanical, electrical, and
            plumbing work. ZEAL-IT is committed to quality products, artistic designs, on-time
            supply, professional installation, and excellent after-sales support and
            maintenance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Zeal-IT Building Materials is fully committed to high-quality performance to
            ensure customer satisfaction, and our approach to business is partnership-driven,
            providing us with a wide spectrum of loyal customers. Continuous improvement is a
            way of life at Zeal-IT and underlines our commitment to being the best product
            supplier to our valued clients and customers.
          </p>
        </div>
      </div>

      {/* 🔹 Product Grid Section */}
      <div className="bg-[#f9fafb] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Our <span >Products</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We supply a wide range of reliable, efficient, and durable piping and
            welding products — tailored to meet the needs of both commercial and
            industrial clients.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className={`absolute bottom-4 left-4 ${product.color} p-3 rounded-xl shadow-md`}
                  >
                    {product.icon}
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Clients Section */}
      <div className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
         
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center justify-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Products;
