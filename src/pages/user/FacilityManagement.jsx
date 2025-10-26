import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  DollarSign,
  Receipt,
  Wrench,
  Bell,
  Shield,
  Phone,
  CheckCircle,
  TrendingUp,
  ChevronRight,
  Send,
  Building,
  Factory,
  Store,
  Server,
  GraduationCap
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

// Helper component for the partnership/tracking features
const PartnershipPoint = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <Icon className="flex-shrink-0 w-8 h-8 text-orange-400 mt-1 p-1.5 rounded-full bg-[#1e1e2a]/80" />
        <div>
            <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);


// Helper component for managed environment cards
const EnvironmentCard = ({ icon: Icon, title }) => (
  <motion.div
    className="bg-white p-6 rounded-xl flex items-center space-x-4 shadow-md border border-gray-200 hover:shadow-xl hover:bg-orange-50 transition-all duration-300 transform hover:-translate-y-1 cursor-default"
    whileHover={{ scale: 1.02 }}
  >
    <Icon className="w-8 h-8 text-orange-600 flex-shrink-0" />
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
  </motion.div>
);

// Main Facility Management component
const App = () => {
  const serviceCategories = [
    // Group 1: Core Maintenance
    {
      title: "Core Building Maintenance",
      services: [
        "Planned Preventative Maintenance",
        "Handyman, Janitorial Services",
        "Internal Office Moves",
      ],
      icon: Wrench,
    },
    // Group 2: Operational Support Services
    {
      title: "Operational Support Services",
      services: [
        "Cleaning & Hygiene",
        "Post Room Services",
        "Switch-board / Help Desk Management",
      ],
      icon: Bell,
    },
    // Group 3: Security & Logistics
    {
      title: "Logistics & Security",
      services: [
        "Security Personnel & Systems",
        "Relocations & Large Moves",
        "Asset Management Support",
      ],
      icon: Shield,
    },
  ];

  const managedEnvironments = [
    { name: "Commercial Office Spaces", icon: Building },
    { name: "Industrial & Manufacturing Sites", icon: Factory },
    { name: "Retail & Shopping Centers", icon: Store },
    { name: "Data Centers & Critical Facilities", icon: Server },
    { name: "Educational Campuses", icon: GraduationCap },
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
                        <span className="text-orange-500">Facility Management</span>
                      </div>
          
                      <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
                        <Sparkles className="w-4 h-4 text-orange-400" />
                        <span>Request Service Quote</span>
                      </button>
          
                      <h1 className="text-3xl md:text-4xl font-bold">
                        Integrated Facility Management: Optimizing Your Work Environment
                      </h1>
          
                      <p className="text-gray-300 leading-relaxed max-w-lg">
                       Streamline your operations with our comprehensive facilities management solutions, ensuring efficiency, compliance, and a world-class environment for your team.
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
            The <span className="text-orange-600">Zeal-it Advantage</span>: Our Core Commitments
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Seamless Integration"
              description="Our team integrates seamlessly with your personnel, ensuring the day-to-day interface is smooth and requires minimal client participation once installed."
            />
            <FeatureCard
              icon={DollarSign}
              title="Cost-Effective Management"
              description="We are committed to cost-effective facilities management, continually working to provide an improving level of service that reduces your operational overheads."
            />
            <FeatureCard
              icon={Receipt}
              title="Full Financial Transparency"
              description="We operate an open book policy and provide a single monthly invoice, supported by a detailed financial summary of all costs incurred for complete clarity."
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
                Our Full Scope
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                One Partner for All{" "}
                <span className="text-orange-500">Facility Needs</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We provide a complete range of services that relate to all
                activities necessary for your company to function, streamlining
                your operations into a single vendor relationship.
              </p>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                Explore Full Service Portfolio
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
                    Operational Structure
                </p>
                <h2 className="text-4xl font-bold text-white">
                    Built for <span className="text-orange-500">Minimal Client Participation</span>
                </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                <PartnershipPoint
                    icon={Phone}
                    title="Unified Single Contact"
                    description="Eliminate complexity by relying on one dedicated contact for every facet of your facilities management requirement."
                />
                <PartnershipPoint
                    icon={CheckCircle}
                    title="Seamless Day-to-Day Interface"
                    description="Our team integrates successfully with your personnel, making the daily facility management seamless and nearly invisible."
                />
                <PartnershipPoint
                    icon={TrendingUp}
                    title="Committed to Improvement"
                    description="We guarantee an improving level of service over time, focused on maximizing efficiency and the quality of your working environment."
                />
            </div>
        </div>
      </div> */}

      {/* --- */}
      {/* 🔹 5. Managed Environments */}
      <div className="py-20 px-6 md:px-16 bg-gray-50 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Environments <span className="text-orange-500">We Manage</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Zeal-it provides essential support across a diverse range of business
            and specialized facilities, ensuring efficiency regardless of scale or sector.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {managedEnvironments.map((env, index) => (
              <EnvironmentCard key={index} icon={env.icon} title={env.name} />
            ))}
          </div>
        </div>
      </div>

      {/* --- */}
      {/* 🔹 6. Final CTA / Call to Action */}
      {/* <div className="py-16 px-6 md:px-16 bg-white">
        <div className="container mx-auto bg-gradient-to-r from-orange-600 to-red-700 p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Reduce Your Overheads?
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Let Zeal-it streamline your facility management, creating the efficient
            and well-maintained environment your company needs.
          </p>
          <button className="flex items-center justify-center mx-auto gap-3 px-10 py-4 rounded-full bg-white text-orange-600 text-lg font-bold shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05]">
            <Sparkles className="w-5 h-5" />
            Get a Free Consultation
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default App;
