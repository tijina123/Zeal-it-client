import React from "react";
import { motion } from "framer-motion";
import {
  Recycle, // Main Icon for Recycling
  Truck, // For Logistics/Pickup
  Factory, // For Industrial Services/Housekeeping
  Wrench, // For Dismantling Services
  Box, // For Scrap Categories
  TrendingUp, // For Vision/Exports
  Target, // For Industrial Zones Focus
  Mail, // For Contact CTA
  Leaf, // For Environmental Focus (using as a new icon)
  Shield, // For Safety (using as a new icon)
  Sparkles
} from "lucide-react";

// Helper component for core service features (reusing the style)
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
  >
    <Icon className="w-8 h-8 text-orange-600 mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

// Helper component for commitment points (Operational focus)
const OperationalPoint = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        {/* Using the dark background hex from the Biomedical file */}
        <Icon className="flex-shrink-0 w-8 h-8 text-orange-400 mt-1 p-1.5 rounded-full bg-[#1E1E2A]/80" />
        <div>
            <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

const App = () => {
  const accentColor = "text-orange-600";
  const accentLight = "text-orange-500";

  // Data structured for the Scrap Categories section (similar to Biomedical products)
  const scrapCategories = [
    {
      title: "Metal Scrap & E-Waste Trading",
      products: [
        "Aluminium, Brass, Copper, Stainless Steel",
        "Lead, Batteries, Steel Scrap",
        "Electronic Scrap (including strange/oversize)",
      ],
      icon: Box,
    },
    {
      title: "Non-Metal, Rubber & Polymer Waste",
      products: [
        "Rubber Tubes and General Rubber Waste",
        "PVC (Polyvinyl Chloride)",
        "Plastics and Card Board",
      ],
      icon: Recycle,
    },
  ];

  return (
    <section className="bg-white text-gray-800 font-sans">
     {/* 🔹 1. Hero Section (Banner) - Dark Theme */}
         {/* 🔹 Top Hero Section (No scroll animation needed, it's visible on load) */}
               <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1A] to-[#1E1E2A] text-white py-24 px-6 md:px-16">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
         
                 <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                   {/* Left Content */}
                   <div className="space-y-6">
                     <div className="flex items-center gap-2 text-sm text-gray-400">
                       <span className="hover:text-orange-400 cursor-pointer">Home</span>
                       <span>/</span>
                       <span className="text-orange-500">Recycling division</span>
                     </div>
         
                     <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
                       <Sparkles className="w-4 h-4 text-orange-400" />
                       <span>Qatar's Leading Scrap Management</span>
                     </button>
         
                     <h1 className="text-3xl md:text-4xl font-bold">
                       Integrated Scrap Recycling & Trading Solutions
                     </h1>
         
                     <p className="text-gray-300 leading-relaxed max-w-lg">
                       Partner with us for responsible waste disposal, competitive pricing, and certified dismantling services across all industrial zones in Qatar
                     </p>
         
                     <div className="flex gap-2">
                       <div className="h-1 w-8 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
                       <div className="h-1 w-4 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
                     </div>
                   </div>
         
                   {/* Animated Shape */}
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
         
                       <motion.div
                         animate={{ rotate: 360 }}
                         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                         className="absolute top-0 right-0 w-full h-full"
                       >
                         <div className="absolute -top-2 right-10 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_#ff6b00]"></div>
                       </motion.div>
                     </motion.div>
                   </div>
                 </div>
               </div>

      {/* --- */}
      {/* 🔹 2. Core Service Features (Three Feature Cards) */}
      <div className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Commitment, Safety, and <span className={accentColor}>Scope</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Truck}
              title="Safe On-Site Scrap Collection"
              description="We pick up all scrap materials from your premises with comprehensive safety, discipline, and care, including strange and oversize items."
            />
            <FeatureCard
              icon={Factory}
              title="Free Scrap Site Housekeeping"
              description="To provide better service, we offer free housekeeping of scrap sites for all respected Industries, Factories, Workshops, and Warehouses."
            />
            <FeatureCard
              icon={Target}
              title="Industrial Zone Expertise"
              description="We possess deep experience and are licensed to handle scrap within RasLaffan Industrial City, Mesaieed Industrial Area, and all over Qatar."
            />
          </div>
        </div>
      </div>

      {/* --- */}
      {/* 🔹 3. Detailed Scrap Categories & Dismantling */}
      <div className="py-20 px-6 md:px-16">
        <div className="container mx-auto">
          <div className="md:flex md:gap-12">
            {/* Left Column: Summary & Capacity */}
            <div className="md:w-1/3 mb-8 md:mb-0 space-y-6">
              <p className="text-sm font-semibold uppercase text-orange-600 tracking-widest">
                What We Purchase
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                Comprehensive <span className={accentLight}>Scrap Portfolio</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are interested in taking up all kinds of scrap recycling business, covering a vast array of metal, non-metal, and industrial equipment for local trading and export.
              </p>

              {/* Dismantling Focus Block */}
              <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                <h3 className="flex items-center text-lg font-semibold text-orange-800 mb-2">
                    <Wrench className="w-5 h-5 mr-2" />
                    Dismantling & Equipment Removal
                </h3>
                <p className="text-orange-700 text-sm">
                    We purchase all kinds of used & scrap **Plant & Machinery, Earth moving & Heavy Equipments, Portacabin, and Containers**, including the dismantling of warehouses and sheds.
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Scrap List */}
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
              {scrapCategories.map((category, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-inner border-t-4 border-orange-600">
                  <div className="flex items-center mb-3 text-lg font-semibold text-gray-900">
                    <category.icon className="w-5 h-5 text-orange-600 mr-2" />
                    {category.title}
                  </div>
                  <ul className="space-y-1 list-none text-gray-700 text-sm">
                    {category.products.map((product, rIndex) => (
                      <li key={rIndex} className="flex items-center">
                        <span className="text-orange-600 mr-2">&bull;</span>
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- */}
      {/* 🔹 4. Environmental & Operational Commitment (Dark Section) */}
      {/* <div className="relative overflow-hidden bg-gradient-to-br from-[#1E1E2A] to-[#0B0E1A] text-white py-20 px-6 md:px-16">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase text-orange-400 tracking-widest">
                    Our Environmental Impact
                </p>
                <h2 className="text-4xl font-bold text-white">
                    Joining Hands to <span className={accentLight}>Save Resources</span>
                </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                <OperationalPoint
                    icon={Leaf}
                    title="Conservation Focused"
                    description="We chose the recycling business because it directly saves natural resources, securing a better future for generations to come."
                />
                <OperationalPoint
                    icon={TrendingUp}
                    title="Local & Global Trading"
                    description="We are experts in scrap processing and trading, catering to local needs in Qatar as well as fulfilling export requirements."
                />
                <OperationalPoint
                    icon={Shield}
                    title="Strict Safety Protocols"
                    description="All operations, especially inside sensitive areas like RasLaffan, are executed with the highest standards of safety, discipline, and care."
                />
            </div>
        </div>
      </div> */}

      {/* --- */}
      {/* 🔹 5. Final CTA / Call to Action */}
      {/* <div className="py-16 px-6 md:px-16 bg-white">
        
        <div className="container mx-auto bg-gradient-to-r from-orange-600 to-red-700 p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Serve You with Quality Service with Zeal
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            We are ready to take up all kinds of scrap recycling business across Qatar. Contact us to get started with a site assessment.
          </p>
      
          <button className="flex items-center justify-center mx-auto gap-3 px-10 py-4 rounded-full bg-white text-orange-600 text-lg font-bold shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05]">
            <Mail className="w-5 h-5" />
            Contact Our Recycling Team
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default App;
