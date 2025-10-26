import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Eye,
  Gem,
  CheckCircle,
  Users,
  Cpu,
  Leaf,
  Clock,
  Headphones,
  DollarSign,
  MapPin,
  Award, Layers, FolderCheck, ThumbsUp 
} from "lucide-react";



const stats = [
  { icon: <Award className="w-8 h-8 text-orange-500" />, num: "25+", label: "Years Experience" },
  { icon: <Layers className="w-8 h-8 text-orange-500" />, num: "8", label: "Service Divisions" },
  { icon: <FolderCheck className="w-8 h-8 text-orange-500" />, num: "500+", label: "Projects Done" },
  { icon: <ThumbsUp className="w-8 h-8 text-orange-500" />, num: "100%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Top About Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1A] to-[#1E1E2A] text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="hover:text-orange-400 cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-orange-500">About Us</span>
            </div>

            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>About Zeal-it</span>
            </button>

            <h1 className="text-3xl md:text-4xl font-bold">
              Building Excellence Since 1998
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              A trusted name in construction, real estate, facility management,
              and beyond. Delivering quality and innovation across all industries.
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

      {/* Who We Are Section */}
      <div className="py-20 px-6 md:px-16 bg-white text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-sm text-orange-600 font-semibold mb-2">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Zeal-it is a diversified conglomerate offering comprehensive
              solutions across multiple sectors. From construction and real estate
              to agro products and biomedical trading, we bring expertise and
              excellence to every endeavor.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our commitment to quality, innovation, and sustainability has made us
              a trusted partner for businesses and individuals alike.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>

           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 text-center">
  {[
    { num: "25+", label: "Years Experience" },
    { num: "8", label: "Service Divisions" },
    { num: "500+", label: "Projects Done" },
    { num: "100%", label: "Client Satisfaction" },
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="p-6 border-b-4 border-orange-500 hover:-translate-y-1 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
    >
      <h4 className="text-3xl font-extrabold text-gray-900">{item.num}</h4>
      <p className="text-sm text-gray-600 mt-1">{item.label}</p>
    </motion.div>
  ))}
</div>


          </div>

          <div>
            <img
              src="about.jpeg"
              alt="Building"
              className="rounded-2xl shadow-lg "
            />
          </div>
        </div>
      </div>

      {/* Our Core Principles Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-16 text-center">
  <h3 className="text-sm text-orange-600 font-semibold mb-1">
    Our Core Principles
  </h3>
  <p className="text-gray-700 mb-10">
    The foundation of our success and commitment to excellence
  </p>

  <div className="flex flex-wrap justify-center gap-13">
    {[
      {
        icon: <Target className="w-6 h-6 text-white" />,
        title: "Our Mission",
        desc: "To deliver innovative and sustainable solutions across all our service divisions, exceeding client expectations through quality and excellence.",
      },
      {
        icon: <Eye className="w-6 h-6 text-white" />,
        title: "Our Vision",
        desc: "To be the leading diversified conglomerate known for integrity, innovation, and commitment to sustainable development.",
      },
      {
        icon: <Gem className="w-6 h-6 text-white" />,
        title: "Our Values",
        desc: "Quality, integrity, innovation, sustainability, and customer satisfaction drive everything we do.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        className="w-[290px] h-[300px] bg-gradient-to-b from-white via-orange-50/30 to-gray-50/60 backdrop-blur-sm border border-orange-100 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-4 shadow-md">
          {item.icon}
        </div>
        <h4 className="font-semibold text-lg mb-3 text-gray-900">{item.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</div>


      {/* Why Choose Us Section */}
      <div className="py-16 px-6 md:px-16 text-center">
        <h3 className="text-sm text-orange-600 font-semibold mb-1">
          Why Choose Us
        </h3>
        <p className="text-gray-700 mb-8">
          Discover what sets us apart from the competition
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { icon: <CheckCircle />, text: "ISO Certified Quality Standards" },
            { icon: <Users />, text: "Expert Team of Professionals" },
            { icon: <Cpu />, text: "Cutting Edge Technology" },
            { icon: <Leaf />, text: "Sustainable Practices" },
            { icon: <Clock />, text: "Timely Project Delivery" },
            { icon: <Headphones />, text: "24/7 Customer Support" },
            { icon: <DollarSign />, text: "Competitive Pricing" },
            { icon: <MapPin />, text: "Pan India Presence" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-2 border rounded-lg py-3 px-4 text-sm text-gray-700 hover:bg-orange-50 transition"
            >
              <span className="text-orange-500">{feature.icon}</span>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
