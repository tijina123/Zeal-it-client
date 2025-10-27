import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const projectList = [
  {
    title: "EPIC Projects",
    description: "Engineering, Procurement, Installation, and Commissioning projects",
    category: "Industrial",
    image: "/architects-face-mask-planning-construction-new-normal.jpg",
    color: "bg-pink-600",
  },
  {
    title: "Educational Buildings",
    description: "Schools, colleges, universities, and training centers",
    category: "Commercial",
    image: "/educational.jpg",
    color: "bg-yellow-500",
  },
  {
    title: "Mosques",
    description: "Religious architectural projects with traditional and modern designs",
    category: "Public",
    image: "/mosque.jpg",
    color: "bg-pink-600",
  },
  {
    title: "Industrial Warehouses",
    description: "Large-scale storage and logistics infrastructure projects",
    category: "Industrial",
    image: "/industrial.jpg",
    color: "bg-blue-600",
  },
  {
    title: "Hotel & Resort Buildings",
    description: "Luxury and hospitality-focused construction projects",
    category: "Commercial",
    image: "/hotel&resort.jpg",
    color: "bg-purple-600",
  },
  {
    title: "Fire Stations",
    description: "Critical emergency response infrastructure projects",
    category: "Public",
    image: "/firestation.jpg",
    color: "bg-red-600",
  },
  {
    title: "Substations",
    description: "Electrical substations and related energy transmission facilities",
    category: "Infrastructure",
    image: "/substation.jpg",
    color: "bg-green-600",
  },
  {
    title: "High-Rise & Office Buildings",
    description: "Commercial and multi-story architectural structures",
    category: "Commercial",
    image: "/office.jpg",
    color: "bg-indigo-600",
  },
  {
    title: "Fuel Stations & Fahes",
    description: "Fuel distribution and vehicle testing facilities",
    category: "Infrastructure",
    image: "/fuel.jpg",
    color: "bg-orange-500",
  },
  {
    title: "Plant Shutdown",
    description: "Specialized industrial shutdown and maintenance operations",
    category: "Industrial",
    image: "/plant.jpg",
    color: "bg-gray-700",
  },
  {
    title: "Control & Telecom Towers",
    description: "Advanced telecom and control system infrastructure development",
    category: "Infrastructure",
    image: "/telecom.jpg",
    color: "bg-cyan-600",
  },
  {
    title: "Sports Facilities",
    description: "Construction of stadiums, courts, and athletic infrastructure",
    category: "Public",
    image: "/sports.jpg",
    color: "bg-emerald-600",
  },
  {
    title: "Infrastructure",
    description: "Comprehensive civil and urban infrastructure development projects",
    category: "Infrastructure",
    image: "/illustration-construction-site.jpg",
    color: "bg-sky-600",
  },
  {
    title: "Residential Units",
    description: "Modern villas, apartments, and residential complex developments",
    category: "Residential",
    image: "/big-buildings.jpg",
    color: "bg-rose-600",
  },
];

const categories = ["All", "Commercial", "Industrial", "Public", "Infrastructure", "Residential"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectList
      : projectList.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-white text-gray-800">
      {/* --- Hero Section (same as your existing one) --- */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1A] to-[#1E1E2A] text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="hover:text-orange-400 cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-orange-500">Projects</span>
            </div>

            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Our Portfolio</span>
            </button>

            <h1 className="text-3xl md:text-4xl font-bold">Project Excellence</h1>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Showcasing our diverse range of completed and ongoing projects across multiple sectors with uncompromising quality.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
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
      </div>

       {/* New Two-Column Image + Text Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image with Orange Background & Animation */}
        <motion.div
          className="relative md:w-1/2 w-full flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Background block */}
          <div className="absolute top-5 left-5 bg-orange-600 w-[85%] h-[85%] rounded-sm -z-10"></div>
          {/* Image */}
          <img
            src="/img2.jpg"
            alt="Projects"
            className="w-full max-w-md object-cover shadow-xl rounded-md h-100"
          />
        </motion.div>

        {/* Right - Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contracts and Projects
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zeal-it offers to undertake a range of projects and have an experience of engagement under most forms of Contract for EPIC Project, Prime Contracting / Construction Management, Traditional Contracting, Maintenance Contracts & Plant Shutdown Contracts & we also leases Technical / Skilled Manpower and Various Equipments for long and short term basis upon the Clients’ requirements
          </p>
          <p className="text-gray-600 leading-relaxed">
            Zeal-it undertake any projects in all fields of construction with full technical quality skills and finance supports.
          </p>
        </div>
      </div>

      {/* --- Filter Section --- */}
      <div className="bg-[#f9fafb] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Our <span className="#d61a46">Projects</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Explore our expertise across diverse construction and infrastructure projects
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white border-orange-500 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-orange-50 hover:border-orange-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* --- Project Cards Grid --- */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-3xl border border-gray-200 overflow-hidden bg-white transition-all duration-500 ease-out hover:shadow-xl hover:scale-[1.02] hover:border-gray-300"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-90"
                    />
                    
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

