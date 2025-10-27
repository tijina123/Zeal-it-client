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

const RecycleDivision = () => {
  return (
    <div className="bg-white text-gray-800">
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


      {/* ===== Content Section ===== */}
      <section className="bg-white py-16 px-6 md:px-16 text-gray-800">
        <div className="max-w-6xl mx-auto space-y-10 leading-relaxed">
          {/* Negotiable Rates */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Recycling Division
            </h2>
            <p className="mb-4">
              We are engaged in Metal & Non Metal Scrap Processing, Trading locally as well as export, from Qatar. We purchase : All kinds of Metal Scrap, such as Aluminium, Brass, Copper, Stainless Steel, Lead, Batteries, Steel & Electronic Scrap, including strange and oversize scrap
            </p>
            <p>
             
              All kinds of Used & Scrap Plant & Machinery, Earth moving & Heavy Equipments,Portacabin, Container, including dismantling of warehouse, shed, etc.
</p>
<p>
  All kinds of Non Metal Scrap, such as Rubber Tubes, Rubber Waste, PVC, Plastic, Card BoardWe will pick up all the scrap from your premises with safety and care.
</p>
<p>
  In order to provide better service to our respected & reputable client's, combined with Scrap business, we do free housekeeping of scrap site for Industries, Factories, Workshop& Warehouse. Recycling saves natural resouces, so we have chosen to be in recycling business to serve you and with your associated support, we join our hands together, to save the natural resources, for all our future generations.
</p>

<p className="mb-4">
  We have experience to handle scrap materials inside RasLaffan Industrial City with Safety, Discipline &Care .We are interested to take up all kinds of scrap recycling business inside RasLaffan Industrial City, Mesaieed Industrial Area and all over Qatar and serve you with quality service with zeal
</p>





            
          </div>

         
        </div>
      </section>
    </div>
  );
};

export default RecycleDivision;














