import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const CivilConstruction = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* 🔹 Hero Section (Banner) */}
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
              From intricate foundations to large-scale paving, we deliver
              world-class structural and civil solutions tailored to your
              complex needs.
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
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
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
              Civil Construction
            </h2>

            <p className="mb-4">
              At <b>Zeal-it</b>, we consistently deliver outstanding quality of
              service in every market where we work, providing bespoke civil
              engineering and building solutions to public and private sector
              clients.
            </p>

            <p className="mb-4">
              Our teams have expertise in a range of sectors where we undertake
              infrastructure, capital, and maintenance projects through a
              variety of procurement routes.
            </p>

            <p className="mb-4">
              Our business is driven by the needs of our clients and our people
              are motivated by providing ever higher levels of expertise.
              Working with public and private sector clients in the Qatar market
              has earned us a reputation for quality and delivering what we
              promise.
            </p>

            <p className="mb-4">
              We are proud of our success and of our people whose skills,
              dedication, and expertise have achieved award-winning recognition
              from a number of leading industry bodies.
            </p>

            <p className="mb-4">
              We can perform multiple types of construction, concrete works, and
              specialized paving works to meet your requirements. We have the
              ability to perform unique intricate foundations, as well as
              paving. Our Industrial Services are also experienced in the
              fabrication and erection of structural steel.
            </p>

            <p className="mb-4 font-semibold">Our expertise includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Concrete Paving</li>
              <li>Parking Lots</li>
              <li>Building Foundation</li>
              <li>Structural Steel Erection</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CivilConstruction;






