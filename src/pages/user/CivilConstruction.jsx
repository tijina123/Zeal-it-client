import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award, // For Recognition
  Hammer, // Main Icon for Construction
  HardHat,
  Users,
  Building,
  Factory, // REPLACEMENT for Crane (Structural/Heavy Lifting)
  Settings2, // For Bespoke Solutions
  Ruler, // For Engineering/Design
  Phone,
  TrendingUp,
  ChevronRight,
  Send,
  SquareStack, // For Multi-type Construction
  Shield,
  TrafficCone, // REPLACEMENT for Road (Paving)
  Target, // For Client-driven focus
} from "lucide-react";

// Helper component for the three main features
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

// Helper component for the partnership/tracking features (Operational focus)
const OperationalPoint = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <Icon className="flex-shrink-0 w-8 h-8 text-orange-400 mt-1 p-1.5 rounded-full bg-[#1e1e2a]/80" />
        <div>
            <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);


// Helper component for managed environment cards (here, sectors served)
const SectorCard = ({ icon: Icon, title }) => (
  <motion.div
    className="bg-white p-6 rounded-xl flex items-center space-x-4 shadow-md border border-gray-200 hover:shadow-xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 cursor-default"
    whileHover={{ scale: 1.02 }}
  >
    <Icon className="w-8 h-8 text-orange-600 flex-shrink-0" />
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
  </motion.div>
);

// Main Service component
const App = () => {
  const serviceCategories = [
    // Group 1: Structural Works
    {
      title: "Structural & Foundation Expertise",
      services: [
        "Unique Intricate Foundation Construction",
        "Building Foundation Work",
        "Structural Steel Fabrication and Erection",
        "Multiple Types of General Construction",
      ],
      icon: Factory, // Updated icon
    },
    // Group 2: Concrete & Paving
    {
      title: "Concrete and Paving Solutions",
      services: [
        "Specialized Concrete Works",
        "Specialized Paving Works",
        "Commercial and Industrial Parking Lots",
        "Complex Concrete Infrastructure",
      ],
      icon: TrafficCone, // Updated icon
    },
  ];

  const expertiseSectors = [
    { name: "Public Sector Infrastructure", icon: Shield },
    { name: "Private Sector Building Projects", icon: Building },
    { name: "Capital Development Projects", icon: TrendingUp },
    { name: "Infrastructure Maintenance", icon: Settings2 },
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
                         <span className="text-orange-500">Civil Construction</span>
                       </div>
           
                       <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
                         <Sparkles className="w-4 h-4 text-orange-400" />
                         <span>View Capabilities</span>
                       </button>
           
                       <h1 className="text-3xl md:text-4xl font-bold">
                         Pioneering Civil Engineering and Infrastructure
                       </h1>
           
                       <p className="text-gray-300 leading-relaxed max-w-lg">
                         From intricate foundations to large-scale paving, we deliver world-class structural and civil solutions tailored to your complex needs.
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
            Our Commitment to <span className="text-orange-600">Excellence</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Settings2}
              title="Bespoke Civil Solutions"
              description="We provide tailored civil engineering and building solutions, adapting our expertise to the unique requirements of every public and private sector client."
            />
            <FeatureCard
              icon={SquareStack}
              title="Multi-Sector Expertise"
              description="Our teams have proven expertise across infrastructure, capital development, and critical maintenance projects using a variety of procurement routes."
            />
            <FeatureCard
              icon={Award}
              title="Award-Winning Recognition"
              description="We are proud of our people whose dedication and skills have achieved award-winning recognition from leading industry bodies for quality and expertise."
            />
          </div>
        </div>
      </div>

      {/* --- */}
      {/* 🔹 3. Detailed Services & Scope */}
      <div className="py-20 px-6 md:px-16">
        <div className="container mx-auto">
          <div className="md:flex md:gap-12">
            {/* Left Column: Summary & Capacity */}
            <div className="md:w-1/3 mb-8 md:mb-0 space-y-6">
              <p className="text-sm font-semibold uppercase text-orange-600 tracking-widest">
                Specialized Services
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                Delivering Complex <span className="text-orange-500">Structural</span> and Paving Works
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We perform multiple types of construction, concrete works, and industrial services, including the fabrication and erection of structural steel to meet unique industrial and commercial needs.
              </p>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                Explore Our Project Portfolio
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column: Detailed Services List */}
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-inner border-t-4 border-orange-600">
                  <div className="flex items-center mb-3 text-lg font-semibold text-gray-900">
                    <category.icon className="w-5 h-5 text-orange-600 mr-2" />
                    {category.title}
                  </div>
                  <ul className="space-y-1 list-none text-gray-700 text-sm">
                    {category.services.map((service, rIndex) => (
                      <li key={rIndex} className="flex items-center">
                        <span className="text-orange-600 mr-2">&bull;</span>
                        {service}
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
      {/* <div className="relative overflow-hidden bg-gradient-to-br from-[#1E1E2A] to-[#0B0E1A] text-white py-20 px-6 md:px-16">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase text-orange-600 tracking-widest">
                    Our Operational Drivers
                </p>
                <h2 className="text-4xl font-bold text-white">
                    Driven by <span className="text-orange-500">Client Needs</span> and Expertise
                </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                <OperationalPoint
                    icon={Target}
                    title="Client-Driven Focus"
                    description="Our business strategy is directly shaped by the evolving needs of our public and private sector clients."
                />
                <OperationalPoint
                    icon={Users}
                    title="Motivated Personnel"
                    description="Our teams are motivated to provide ever higher levels of expertise and skill, ensuring project success."
                />
                <OperationalPoint
                    icon={HardHat}
                    title="Guaranteed Quality Delivery"
                    description="We have earned a strong reputation in the Qatar market for consistently delivering on our promises with uncompromising quality."
                />
            </div>
        </div>
      </div> */}

      {/* --- */}
      {/* 🔹 5. Final CTA / Call to Action */}
      {/* <div className="py-16 px-6 md:px-16 bg-white">
        <div className="container mx-auto bg-gradient-to-r from-orange-600 to-red-700 p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Seeking Award-Winning Civil Engineering?
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact Zeal-it today to leverage our skills, dedication, and expertise for your next infrastructure, capital, or maintenance project.
          </p>
          <button className="flex items-center justify-center mx-auto gap-3 px-10 py-4 rounded-full bg-white text-orange-600 text-lg font-bold shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05]">
            <Phone className="w-5 h-5" />
            Connect with Our Civil Team
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default App;
