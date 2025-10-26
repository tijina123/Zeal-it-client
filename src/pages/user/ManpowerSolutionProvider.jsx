import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Wallet,
  ShieldCheck,
  Calendar,
  Layers,
  HardHat,
  Users,
  Briefcase,
  ChevronRight,
  Send,
} from "lucide-react";

// Animation Variants for all sections
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1, // Stagger children elements (like cards or list items)
      when: "beforeChildren",
    },
  },
};

// Animation Variants for individual children elements
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Helper component for the three main features - UPDATED
const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    // Apply animation variants here
    variants={itemVariants}
    className="p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
  >
    <Icon className="w-8 h-8 text-orange-500 mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

// Main Manpower component (App component for the canvas)
const Manpower = () => {
  const manpowerList = [
    // Group 1: Supervision & Engineering
    {
      title: "Supervision & Engineering",
      roles: [
        "Engineers",
        "QA/QC Engineers",
        "Lifting Supervisor",
        "Scaffolders Inspector & Foreman (3rd party cert)",
        "Foreman",
        "Supervisors",
        "Electrical & Mechanical Draftsman",
      ],
      icon: Briefcase,
    },
    // Group 2: Skilled Trades & Technical
    {
      title: "Skilled Trades & Technical",
      roles: [
        "Masons",
        "Carpenters",
        "Steel Fixers",
        "Plumbers",
        "Pipe Fitters",
        "Ductman",
        "Steel Fabricator",
        "Roof Installer",
        "Cladding Workers",
      ],
      icon: HardHat,
    },
    // Group 3: Operators & Certified Roles
    {
      title: "Operators & Certified Roles",
      roles: [
        "Man Lift Operator (3rd party cert)",
        "Fire-watchers (Certificate)",
        "Riggers (3rd party cert)",
        "Banksman (3rd party cert)",
        "Operators",
        "Drivers",
      ],
      icon: Layers,
    },
    // Group 4: General Support & Utility
    {
      title: "General Support & Utility",
      roles: ["General Helper", "Painters", "Office boy", "Cleaners"],
      icon: Users,
    },
  ];

  const projectExperience = [
    "Stadium Projects",
    "Doha Metro",
    "Road & Infrastructure Building",
    "Doha Port",
    "Pipeline",
    "Infrastructure Building and Tower Project",
  ];

  return (
    <section className="bg-white text-gray-800 font-sans">
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

      {/* --- */}
      {/* 🔹 2. Core USPs (Three Feature Cards) - ANIMATED */}
      <motion.div
        className="py-20 px-6 md:px-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the section is visible
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            variants={itemVariants}
          >
            Our Commitment: The <span className="text-orange-500">3 Pillars</span>{" "}
            of Service
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Wallet}
              title="Negotiable Rates"
              description="Provides skilled manpower supply at negotiable hourly or monthly rates which are the best in the industry, ensuring maximum value for your investment."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Health and Safety Focused"
              description="Our personnel are rigorously trained to the highest industry standards, thereby contributing directly to a zero-harm and fully compliant workplace."
            />
            <FeatureCard
              icon={Calendar}
              title="Flexible Contracts"
              description="We provide a team or individuals who can meet your manpower requirements perfectly for short-term, medium, and long-term basis, accommodating any project duration."
            />
          </div>
        </div>
      </motion.div>

      {/* --- */}
      {/* 🔹 3. Manpower Categories & Capacity - ANIMATED */}
      <motion.div
        className="py-20 px-6 md:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is visible
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <div className="md:flex md:gap-12">
            {/* Left Column: Summary & Capacity */}
            <motion.div variants={itemVariants} className="md:w-1/3 mb-8 md:mb-0 space-y-6">
              <p className="text-sm font-semibold uppercase text-orange-600 tracking-widest">
                Our Workforce
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                Capacity Exceeds{" "}
                <span className="text-orange-500">5000+ Personnel</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We provide highly qualified professionals and skilled laborers to
                support your needs perfectly. We are the **licensed agency** to
                provide manpower in our sponsorship, reducing your administrative
                worries.
              </p>
              {/* <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                Download Capability Statement
                <ChevronRight className="w-4 h-4" />
              </button> */}
            </motion.div>

            {/* Right Column: Detailed Manpower List */}
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
              {manpowerList.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants} // Each category block animates individually
                  className="p-6 bg-gray-50 rounded-lg shadow-inner border-t-4 border-orange-500"
                >
                  <div className="flex items-center mb-3 text-lg font-semibold text-gray-900">
                    <category.icon className="w-5 h-5 text-orange-500 mr-2" />
                    {category.title}
                  </div>
                  <ul className="space-y-1 list-none text-gray-700 text-sm">
                    {category.roles.map((role, rIndex) => (
                      <li key={rIndex} className="flex items-center">
                        <span className="text-orange-500 mr-2">&bull;</span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- */}
      {/* 🔹 4. Proven Project Experience - ANIMATED */}
      <motion.div
        className="py-20 px-6 md:px-16 text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the section is visible
        variants={containerVariants}
      >
        <div className="container mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            A Proven Track Record in <span className="text-orange-600">Major Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 mb-10 max-w-3xl mx-auto">
            We are currently supporting with our Manpower in few major projects,
            ensuring timely and successful completion.
          </motion.p>
          <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-4 text-center">
            {projectExperience.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants} // Each project tag animates individually
                className="px-6 py-3 bg-white rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:border-orange-500 transition-all duration-300 cursor-default shadow-sm"
                whileHover={{ backgroundColor: "#ff6600", color: "#ffffff" }}
              >
                {project}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Manpower;