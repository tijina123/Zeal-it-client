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

const RealEstateDivision = () => {
  return (
    <div className="bg-white text-gray-800">
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

      {/* ===== Content Section ===== */}
      <section className="bg-white py-16 px-6 md:px-16 text-gray-800">
        <div className="max-w-6xl mx-auto space-y-10 leading-relaxed">
          {/* Negotiable Rates */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Real Estate Division
            </h2>
            <p className="mb-4">
              Whether you are looking to buy, rent or sell, you can be confident that Zeal Properties can fulfill your requirements through our comprehensive understanding of the market and the wide range of properties that we manage. Our vast and extensive knowledge of the property Market enables us to find and negotiate the best offers from developers; giving our client s the best prices and best real estate acquisitions. We also offer sound advice regarding investment opportunities to expatriates and or locals in terms of residential, commercial luxury and premium property. We cater to every requirement, from individuals to companies. Our agency has the most respected and highly experienced Qatar property consultants which qualify us to capably handle resale and new properties in all the major freehold areas.
            </p>
            <p>
             
              Zeal properties offer a multitude of realty services to our clients. We have a large selection of properties, including villas, apartments, townhouses, holiday homes and offices. We specialize in both commercial and residential properties. Whether buying, selling or renting luxury and exclusive properties; Zeal Properties can help you reach your goals. We work in a wide array of different areas, such as Pearl Qatar, (The World’s exclusive man-made pearl island) tornado Tower (The best designed tower in 2013), Palm Tower, Viva bahriya, West Bay Lagoon, Ain Khaled Gate, Al Merzam Residence, World Trade Centre, just to name a few.With our wide network of multilingual and highly qualified agents ready to serve you, you can be confident that every requirement will be met. We are ready to assist you while you search for a new home or even an investment opportunity, while providing the most competitive prices in the market. We are customer focused and ensure that all sellers, buyers and developers are provided with personalized service while treated with respect and professionalism. Our reputation for discretion assures that our clients retain their privacy and confidentiality setting standards above the rest.
</p>

<br></br><br></br>

<p className="font-bold">
  Please visit our portal for more details: www.zeal-properties.com
</p>

            
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default RealEstateDivision;







