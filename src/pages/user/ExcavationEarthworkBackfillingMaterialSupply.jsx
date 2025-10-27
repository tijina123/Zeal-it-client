import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Excavation = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* 🔹 1. Hero Section (Banner) - Dark Theme */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1A] to-[#1E1E2A] text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="hover:text-orange-400 cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-orange-500">Excavation</span>
            </div>

            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Expert Groundwork</span>
            </button>

            <h1 className="text-3xl md:text-4xl font-bold">
              Mastering the Foundation: Site Prep & Earthwork Solutions
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              From initial clearing to certified backfilling, we provide the
              reliable, end-to-end groundwork necessary for large-scale
              industrial and commercial construction projects.
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
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Excavation, Earthwork & Backfilling Material Supply
            </h2>

            <p className="mb-4">
              <b>Zeal-it</b> provides a broad scope of industrial and commercial
              services, serving both the public and private sectors. In addition
              to general construction, we offer site preparation and earth
              moving, concrete paving, and aggregates.
            </p>

            <p className="mb-4">
              One of the original foundations of our business, we are proud to
              boast our experience in Site Preparation and Earth Moving. We have
              the experience to perform a broad scope of site preparation needs.
              We have completed numerous tasks of installing underground GRP
              pipe and GRP lamination services. Our personnel have been
              thoroughly trained to handle the delicate yet important situations
              of these projects.
            </p>

            <p className="mb-4">
              We can perform your difficult tasks without the normal hardships
              of heavy construction. Our Site Preparation Division can perform
              the essential tasks needed for various projects that will follow.
              We have performed preparation for building construction, new unit
              installation, foundation work, and more. Our Site Preparation
              Service can perform turnkey site needs.
            </p>

            <p className="mb-4">
              <b>
                Complete Site Preparation, Underground Concrete Tanks, Pumping
                Stations, Portable Sewage Plants
              </b>{" "}
              — One necessity in any type of construction is the use of a
              variety of materials. In conjunction with that fact, we supply{" "}
              <b>
                Sub base materials, Washed Sand, Dune Sand, Limestone, and
                Gabro.
              </b>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excavation;




