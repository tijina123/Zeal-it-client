import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const BioMedical = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* 🔹 Top Hero Section */}
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
              instruments, consumables, and turn-key solutions, ensuring quality
              and driving innovation.
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
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Bio Medical Trading
            </h2>

            <p className="mb-4">
              Intended to fulfil the complete requirements of Healthcare and
              Scientific professionals in Qatar, we are committed to add the
              division to our foray. With the help of this division, we are
              extremely happy to be a part of Qatar National Vision 2030 in
              healthcare and allied industries. We are committed to serve the
              industry with technologically advanced products which meet the
              industry standards.
            </p>

            <p className="mb-4">
              Designed to cater the requirements of Private Clinics to Referral
              Hospitals and Educational to Research Laboratories, we have
              everything in our product portfolio carefully chosen by a team of
              highly experienced professionals from the industry. Our division
              covers the complete product range related to healthcare — starting
              from First Aid kits to Therapeutic Instruments and Laboratory
              Furniture to highly sophisticated Research Products. Apart from
              the instruments or consumables, with the help of highly
              experienced professionals from our other divisions, we can offer
              Turn Key Solutions for Private Clinics, Hospitals, Educational
              Institutions, and Research Laboratories.
            </p>

            <p className="mb-4">
              We have a dedicated Customer Support Team trained to meet or
              exceed the requirements of our customers — whether it is related
              to training, troubleshooting, or upgradation. We believe sales is
              not something we pursue; it is something that happens to us while
              we are immersed in serving our customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BioMedical;





