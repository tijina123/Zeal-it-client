import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Home, // Main Icon for Real Estate
  Scale, // For Negotiation/Value
  Lock, // For Confidentiality
  Users,
  MapPin, // For Locations
  Building,
  Key, // For Rent/Buy/Sell
  Hotel, // For Holiday Homes/Villas
  Briefcase, // For Commercial/Offices
  Phone,
  TrendingUp,
  ChevronRight,
  Send,
  Globe, // For International Clients/Expatriates
  Wallet, // For Investment Advice
  ListChecks // For Comprehensive Understanding
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


// Helper component for managed environment cards (here, sectors served)
const LocationCard = ({ icon: Icon, title }) => (
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
    // Group 1: Core Transactions
    {
      title: "Core Realty Transactions",
      services: [
        "Buying (Residential, Commercial, Luxury)",
        "Selling (Resale and New Properties)",
        "Renting and Leasing Services",
        "Property Management Support",
      ],
      icon: Key,
    },
    // Group 2: Property Types & Portfolio
    {
      title: "Extensive Property Portfolio",
      services: [
        "Luxury Villas and Townhouses",
        "Premium Apartments and Flats",
        "Commercial Offices and Space",
        "Holiday Homes and Exclusive Listings",
      ],
      icon: Hotel,
    },
    // Group 3: Investment & Advisory
    {
      title: "Investment and Market Advisory",
      services: [
        "Investment Opportunities for Expatriates/Locals",
        "Negotiating Best Offers from Developers",
        "Market Analysis and Valuation Services",
        "Acquisition Strategy Consultation",
      ],
      icon: Wallet,
    },
  ];

  const exclusiveLocations = [
    { name: "The Pearl Qatar (Exclusive)", icon: MapPin },
    { name: "Tornado Tower", icon: Building },
    { name: "West Bay Lagoon", icon: MapPin },
    { name: "Viva Bahriya", icon: MapPin },
    { name: "Ain Khaled Gate", icon: MapPin },
    { name: "World Trade Centre", icon: Building },
  ];


  return (
    <section className="bg-white text-gray-800 font-sans">
      {/* 🔹 1. Hero Section (Banner) - Dark Theme - UPDATED CONTENT */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1A] to-[#1E1E2A] text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="hover:text-orange-400 cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-orange-500">Our Expertise</span> {/* Updated breadcrumb */}
            </div>
      
            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Explore Listings</span> {/* Updated Button Text */}
            </button>
      
            <h1 className="text-3xl md:text-4xl font-bold">
              Unlocking Exclusive <span className="text-orange-500">Property</span> Opportunities {/* Updated H1 Title */}
            </h1>
      
            <p className="text-gray-300 leading-relaxed max-w-lg">
              Your trusted partner in premium property acquisition. Discover a curated portfolio of luxury villas, apartments, and commercial investments with discreet and expert guidance. {/* Updated Description */}
            </p>
      
            <div className="flex gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
              <div className="h-1 w-4 bg-gradient-to-r from-orange-500 to-red-600 rounded"></div>
            </div>
          </div>
      
          {/* Animated Shape (Kept same) */}
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
            The <span className="text-orange-600">Zeal Properties</span> Advantage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Scale}
              title="Best Price Negotiation"
              description="Our vast knowledge of the property market enables us to find and negotiate the best offers directly from developers, ensuring optimal acquisitions."
            />
            <FeatureCard
              icon={ListChecks}
              title="Comprehensive Portfolio"
              description="We manage a large selection of properties, including luxury villas, apartments, townhouses, holiday homes, and commercial offices to cater to every requirement."
            />
            <FeatureCard
              icon={Lock}
              title="Discretion and Confidentiality"
              description="Our reputation for discretion assures that all our clients retain their privacy, setting professional standards above the rest in the luxury market."
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
                Realty Services
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                Multitude of Realty Services{" "}
                <span className="text-orange-500">for Every Client</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We cater to every requirement, from individuals seeking a first home to large companies looking for premium commercial properties and strategic investment advice.
              </p>
              <a 
                href="http://www.zeal-properties.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Visit Our Property Portal
                <ChevronRight className="w-4 h-4" />
              </a>
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
                    Customer Experience
                </p>
                <h2 className="text-4xl font-bold text-white">
                    Highly Qualified <span className="text-orange-500">Multilingual Agents</span>
                </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                <PartnershipPoint
                    icon={Users}
                    title="Personalized Client Service"
                    description="We ensure all sellers, buyers, and developers are provided with personalized service, respect, and professionalism."
                />
                <PartnershipPoint
                    icon={Globe}
                    title="Global Reach, Local Expertise"
                    description="Our wide network of multilingual agents is ready to assist you, whether you are a local or an expatriate investor."
                />
                <PartnershipPoint
                    icon={TrendingUp}
                    title="Competitive Market Prices"
                    description="We constantly strive to provide the most competitive prices in the market for both residential and commercial property acquisitions."
                />
            </div>
        </div>
      </div> */}

      {/* --- */}
      {/* 🔹 5. Exclusive Locations */}
      <div className="py-20 px-6 md:px-16 bg-gray-50 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Specializing in <span className="text-orange-500">Major Freehold Areas</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Our experts capably handle resale and new properties across Qatar's
            most prestigious and high-demand real estate locations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exclusiveLocations.map((loc, index) => (
              <LocationCard key={index} icon={loc.icon} title={loc.name} />
            ))}
          </div>
        </div>
      </div>

      {/* --- */}
      {/* 🔹 6. Final CTA / Call to Action */}
      {/* <div className="py-16 px-6 md:px-16 bg-white">
        <div className="container mx-auto bg-gradient-to-r from-orange-600 to-red-700 p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Find Your Next Investment or Home?
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact Zeal Properties today and let our experienced consultants guide
            you to the perfect residential or commercial acquisition.
          </p>
          <button className="flex items-center justify-center mx-auto gap-3 px-10 py-4 rounded-full bg-white text-orange-600 text-lg font-bold shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05]">
            <Sparkles className="w-5 h-5" />
            Connect with an Agent
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default App;
