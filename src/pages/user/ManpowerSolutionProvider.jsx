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

const ManpowerPage = () => {
  return (
    <div className="bg-white text-gray-800">
           {/* 🔹 Top Hero Section (UPDATED FOR SERVICE PAGE) */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1A] to-[#1E1E2A] text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="hover:text-orange-400 cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-orange-500">Manpower Solutions</span> {/* UPDATED BREADCRUMB */}
            </div>

            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Skilled & Certified Workforce Supply</span> {/* UPDATED TAGLINE */}
            </button>

            <h1 className="text-3xl md:text-4xl font-bold">
              Premium Manpower Solutions for <span className="text-orange-500">Major Projects</span>
              {/* UPDATED HEADING */}
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              Partner with the licensed manpower provider of 5000+ skilled personnel, ready for deployment in engineering, construction, and technical roles for your large-scale ventures. {/* UPDATED PARAGRAPH */}
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
                    <span className="text-2xl font-bold">🛠️</span> {/* UPDATED ICON */}
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
              Negotiable Rates
            </h2>
            <p className="mb-4">
              Provides skilled manpower supply at negotiable hourly or monthly
              rates which is the best in industry. Health and Safety.
            </p>
            <p>
              Our personnel are trained to the industry standard and thereby
              contribute to a zero harm workplace.
            </p>
          </div>

          {/* Flexible Contracts */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Flexible Contracts
            </h2>
            <p className="mb-4">
              We provide a team or individuals who can meet your manpower
              requirements perfectly in short term and long term basis. Different
              companies have different requirements for the workforce. Some want
              employees for a long-term and some for short term. Whether you want
              manpower for a day or a year, we provide a team or individuals who
              can meet your requirements perfectly.
            </p>
            <p className="mb-4">
              We provide highly qualified professionals and skilled labours to
              support with the best top, middle and lower level workforce in a
              short, medium and long term basis. We are the licensed agency to
              provide manpower in our sponsorship to reduce the worries.
            </p>
            <p className="mb-4">
              We provide skilled manpower supply at negotiable hourly or monthly
              rates which is the best in industry. Our current available manpower
              exceeds 5000 across the following categories:
            </p>
            <p className="mb-4">
              General Helper, Painters, Masons, Carpenters, Office Boys, Steel
              Fixers, Plumbers, Man Lift Operators with 3rd party certificates,
              Fire-watchers with certificates, Ductmen, Pipe Fitters, Operators,
              Drivers, Steel Fabricators, Foremen, Supervisors, Cleaners, Riggers
              with 3rd party certificates, Engineers, Scaffolders, Lifting
              Supervisors, QA/QC Engineers, Electrical & Mechanical Draftsmen,
              Fabricators, Roof Installers, Bankmen, Scaffold Inspectors and
              Foremen with 3rd party certificates, etc.
            </p>
            <p>
              Currently we are supporting our manpower in major projects like
              Stadium, Doha Metro, Doha Port, Pipeline, Infrastructure Building
              and Tower Projects. We are a dedicated and trusted partner providing
              all kinds of support services to help complete your project
              successfully and on time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManpowerPage;






