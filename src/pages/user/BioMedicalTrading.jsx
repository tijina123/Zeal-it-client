import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse, // Main Icon for Medical/Health
  Microscope, // For Research
  Stethoscope, // For Clinics/Hospitals
  FlaskConical, // For Laboratories/Products
  Zap, // For Advanced Products
  TrendingUp, // For Vision 2030
  Users,
  Box, // For Comprehensive Portfolio
  Headset, // For Customer Support
  Phone,
  ChevronRight,
  Target, // For Client focus
  Syringe, // For Instruments
  GraduationCap, // For Educational Institutions
  Mail, // Replaced 'Send' (which caused an error) with 'Mail' for contact
  Sparkles
} from "lucide-react";

// Helper component for the three main features
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
  >
    {/* Updated to orange accent */}
    <Icon className="w-8 h-8 text-orange-600 mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

// Helper component for the commitment points (Operational focus)
const OperationalPoint = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        {/* Updated to orange and the darker background hex */}
        <Icon className="flex-shrink-0 w-8 h-8 text-orange-400 mt-1 p-1.5 rounded-full bg-[#1E1E2A]/80" />
        <div>
            <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

// Main Service component
const App = () => {
  // New color theme from the Facility Management file
  const accentColor = "text-orange-600";
  const accentLight = "text-orange-500";
  // The darkBgFrom and darkBgTo variables were removed and their values hardcoded
  // into the className below to prevent compilation errors with arbitrary values.

  const productCategories = [
    // Group 1: Instruments & Therapy
    {
      title: "Therapeutic & Emergency Products",
      products: [
        "First Aid Kits and Supplies",
        "Advanced Therapeutic Instruments",
        "General Medical Consumables",
      ],
      icon: Syringe,
    },
    // Group 2: Research & Laboratory
    {
      title: "Research and Scientific Portfolio",
      products: [
        "Laboratory Furniture and Fittings",
        "Highly Sophisticated Research Products",
        "Educational Institution Lab Supplies",
        "Specialized Analytical Equipment",
      ],
      icon: Microscope,
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
                   <span className="text-orange-500">Bio Medical</span>
                 </div>
     
                 <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
                   <Sparkles className="w-4 h-4 text-orange-400" />
                   <span>TrendingUp Driven by Vision</span>
                 </button>
     
                 <h1 className="text-3xl md:text-4xl font-bold">
                   Leading Biomedical Supply & Scientific Partnerships
                 </h1>
     
                 <p className="text-gray-300 leading-relaxed max-w-lg">
                  We provide Qatar's healthcare and research sectors with advanced
                   instruments, consumables, and turn-key solutions, ensuring quality and driving innovation.
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
      {/* 🔹 2. Core USPs (Three Feature Cards) */}
      <div className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Technology, Scope, and <span className={accentColor}>Commitment</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Technologically Advanced Products"
              description="We carefully choose and supply products that meet and exceed stringent industry standards for quality and performance."
            />
            <FeatureCard
              icon={Box}
              title="Comprehensive Product Portfolio"
              description="Our portfolio caters to the full spectrum of the industry, from first aid kits for clinics to highly sophisticated research instruments."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Support for Vision 2030"
              description="We are proud to be a dedicated partner in advancing Qatar's National Vision 2030 goals in the healthcare and allied scientific industries."
            />
          </div>
        </div>
      </div>

      {/* --- */}
      {/* 🔹 3. Detailed Scope & Turn-Key Solutions */}
      <div className="py-20 px-6 md:px-16">
        <div className="container mx-auto">
          <div className="md:flex md:gap-12">
            {/* Left Column: Summary & Capacity */}
            <div className="md:w-1/3 mb-8 md:mb-0 space-y-6">
              {/* Updated accent color */}
              <p className="text-sm font-semibold uppercase text-orange-600 tracking-widest">
                Industry Reach
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                Catering to Every Level of <span className={accentLight}>Healthcare</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our product portfolio is designed to meet the rigorous demands of various institutions, from small private clinics to large referral hospitals and high-level research laboratories.
              </p>

              {/* Updated border/background colors */}
              <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                {/* Updated text color */}
                <h3 className="flex items-center text-lg font-semibold text-orange-800 mb-2">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Full Turn Key Solutions
                </h3>
                {/* Updated text color */}
                <p className="text-orange-700 text-sm">
                    Leveraging our other divisions' expertise, we offer **Turn Key Solutions** for Clinics, Hospitals, Educational Institutions, and Research Labs, covering more than just instruments.
                </p>
              </div>

            </div>

            {/* Right Column: Detailed Product List */}
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
              {productCategories.map((category, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-inner border-t-4 border-orange-600">
                  <div className="flex items-center mb-3 text-lg font-semibold text-gray-900">
                    {/* Updated icon color */}
                    <category.icon className="w-5 h-5 text-orange-600 mr-2" />
                    {category.title}
                  </div>
                  <ul className="space-y-1 list-none text-gray-700 text-sm">
                    {category.products.map((product, rIndex) => (
                      <li key={rIndex} className="flex items-center">
                        {/* Updated bullet color */}
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
      {/* 🔹 4. Dedicated Partnership & Operational Structure */}
      {/* FIXED: Replaced dynamic class interpolation with hardcoded hex values to resolve the compile error. */}
      {/* <div className="relative overflow-hidden bg-gradient-to-br from-[#1E1E2A] to-[#0B0E1A] text-white py-20 px-6 md:px-16">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                
                <p className="text-sm font-semibold uppercase text-orange-400 tracking-widest">
                    Our Customer Focus
                </p>
                <h2 className="text-4xl font-bold text-white">
                    Service-First, <span className={accentLight}>Customer Immersed</span>
                </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                <OperationalPoint
                    icon={Headset}
                    title="Dedicated Support Team"
                    description="Our team is highly trained to meet or exceed customer requirements for training, troubleshooting, and system upgrades."
                />
                <OperationalPoint
                    icon={Target}
                    title="Service-Driven Philosophy"
                    description="We believe sales are a natural result of being immersed in serving our customers and providing exceptional value."
                />
                <OperationalPoint
                    icon={Users}
                    title="Highly Experienced Professionals"
                    description="Our product selections are carefully chosen by a team of highly experienced industry professionals."
                />
            </div>
        </div>
      </div> */}

      {/* --- */}
      {/* 🔹 5. Final CTA / Call to Action */}
      {/* <div className="py-16 px-6 md:px-16 bg-white">
        
        <div className="container mx-auto bg-gradient-to-r from-orange-600 to-red-700 p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Partner with Zeal-it for Advanced Biomedical Supply
          </h3>
       
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us to fulfill the complete requirements of your healthcare facility or research laboratory with confidence and expertise.
          </p>
       
          <button className="flex items-center justify-center mx-auto gap-3 px-10 py-4 rounded-full bg-white text-orange-600 text-lg font-bold shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05]">
            <Mail className="w-5 h-5" />
            Inquire About Our Products
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default App;
