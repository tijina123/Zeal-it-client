import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users, // Manpower
  HardHat, // Civil Construction
  Package, // Bio-Medical Trading
  Recycle, // Recycling Division
  Home, // Real Estate Division
  Factory, // Facility Management
  Truck, // Excavation/Supply
  Leaf, // Agro & Dairy Products
} from "lucide-react";

// The 8 Service Divisions
const serviceDivisions = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Manpower Solutions",
    description: "Supply of skilled, semi-skilled, and general workforce for various industrial and project-based needs.",
    link: "/manpower-solution-provider",
  },
  {
    icon: <Factory className="w-8 h-8 text-white" />,
    title: "Facility Management",
    description: "Comprehensive maintenance, security, and upkeep services for commercial and residential properties.",
    link: "/facility-management",
  },
  {
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "Excavation & Material Supply",
    description: "Site preparation, earthwork, and reliable supply of backfilling materials like sand and aggregates.",
    link: "/excavation-earthwork-backfilling-materialsupply",
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Real Estate Division",
    description: "Property development, sales, leasing, management, and strategic investment consulting.",
    link: "/real-estate-division",
  },
  {
    icon: <HardHat className="w-8 h-8 text-white" />,
    title: "Civil Construction",
    description: "Execution of construction projects, including residential, commercial, and infrastructure development.",
    link: "/civil-construction",
  },
  {
    icon: <Package className="w-8 h-8 text-white" />,
    title: "Bio-Medical Trading",
    description: "Sourcing and supply of essential medical equipment, consumables, and specialized bio-medical products.",
    link: "/bio-medical",
  },
  {
    icon: <Recycle className="w-8 h-8 text-white" />,
    title: "Recycling Division",
    description: "Sustainable waste management, collection, and processing of recyclable materials for a circular economy.",
    link: "/recycling-division",
  },
  {
    icon: <Leaf className="w-8 h-8 text-white" />,
    title: "Agro And Dairy Products",
    description: "Trading and supply of high-quality agricultural produce, fresh dairy products, and processed food items.",
    link: "/agro-diary-products",
  },
];


const Services = () => {
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
                   <span className="text-orange-500">Services</span>
                 </div>
     
                 <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
                   <Sparkles className="w-4 h-4 text-orange-400" />
                   <span>Our Comprehensive Solutions</span>
                 </button>
     
                 <h1 className="text-3xl md:text-4xl font-bold">Integrated Solutions Across 8 Divisions</h1>
                 <p className="text-gray-300 leading-relaxed max-w-lg">
                   From essential workforce provision and facility management to specialized trading and construction, we deliver excellence in every sector.
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

      {/* Services Grid Section */}
      <div className="py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Explore Our Service Divisions
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Each division is staffed by expert professionals and driven by our core commitment to quality, integrity, and client satisfaction.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {serviceDivisions.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border border-gray-100 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:border-orange-200 transition-all duration-300 text-left space-y-4 transform hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 mb-4 shadow-lg">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Read More Link (Optional) */}
              <a
  href={service.link}
  className="text-sm font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1 mt-4"
>
  Learn More
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
</a>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section (Similar to Our Core Principles Structure) */}
      <div className="bg-gray-50 py-16 px-6 md:px-16 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          Let our diversified expertise be your single point of contact for complex requirements. Contact us today to discuss your specific needs.
        </p>

        <a href="tel:+97444318992">
  <motion.button
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
    className="px-10 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300"
  >
    Get a Free Consultation
  </motion.button>
</a>

      </div>
    </section>
  );
};

export default Services;