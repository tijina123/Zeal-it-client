import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake, // For Consumer Delight/Core Business
  Feather, // For Healthy Eating/Lightness
  Globe, // For International Standards/Sourcing
  Droplet, // For Edible Oils (Corrected icon from 'Drop')
  Wheat, // For Grains, Corn, Soybeans
  Milk, // For Dairy Products (Milk Powder)
  Star, // For ICUMSA Sugar (Premium Grade)
  Tractor, // For Agro/Farming
  Mail, // For Contact CTA
  Sparkles
} from "lucide-react";

// Helper component for core service features (reusing the style)
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

// Helper component for commitment points (Operational focus)
const OperationalPoint = ({ icon: Icon, title, description }) => (
    <div className="flex items-start space-x-4">
        {/* Using the dark background hex from the Biomedical file */}
        <Icon className="flex-shrink-0 w-8 h-8 text-orange-400 mt-1 p-1.5 rounded-full bg-[#1E1E2A]/80" />
        <div>
            <h4 className="text-xl font-semibold text-white mb-1">{title}</h4>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

const App = () => {
  const accentColor = "text-orange-600";
  const accentLight = "text-orange-500";

  // Data structured for the Product Categories section
  const productCategories = [
    {
      title: "Edible Oils & Culinary Essentials",
      products: [
        "Palm Oil (reliable cooking oil, rich and flavorful)",
        "Sunflower Oil (light color, mild taste, rich in Vitamin E)",
        "Soybean Oil (heart-healthy properties, high purity)",
      ],
      icon: Droplet, // Corrected icon usage
    },
    {
      title: "Bulk Grains & Core Ingredients",
      products: [
        "Soybeans (high-quality, plant-based protein source)",
        "Premium-Grade Corn (versatile for consumption or industrial use)",
      ],
      icon: Wheat,
    },
    {
        title: "Dairy & Specialty Sweeteners",
        products: [
          "ICUMSA 45 Grade Sugar (finest quality, pristine white color, low moisture)",
          "Instant Milk Powder (rich, creamy, instant-dissolving, essential nutrients)",
        ],
        icon: Milk,
      },
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
                   <span className="text-orange-500">Contact Us</span>
                 </div>
     
                 <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
                   <Sparkles className="w-4 h-4 text-orange-400" />
                   <span>Premium Bulk Supply</span>
                 </button>
     
                 <h1 className="text-3xl md:text-4xl font-bold">
                   Sourcing the World's Premium Food Ingredients, Responsibly.
                 </h1>
     
                 <p className="text-gray-300 leading-relaxed max-w-lg">
                   From sustainable palm oil and golden sunflower oil to pristine ICUMSA 45 sugar, we are your trusted global partner for high-quality, essential bulk commodities.
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
      {/* 🔹 2. Core Service Principles (Three Feature Cards) */}
      <div className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Commitment to <span className={accentColor}>Quality & Well-being</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={HeartHandshake}
              title="Consumer Delight Focused"
              description="Customer satisfaction is at the core of our business. Our aim is to bring joy to the lives of our valued shoppers and consumers."
            />
            <FeatureCard
              icon={Feather}
              title="Healthy Eating, Healthy Living"
              description="We firmly believe in the principle of healthy living, striving to source and supply products that support well-being and nutrition."
            />
            <FeatureCard
              icon={Globe}
              title="International Quality Standards"
              description="We ensure all products meet the highest quality and international standards, delivering nothing but the best for your culinary and industrial needs."
            />
          </div>
        </div>
      </div>

      {/* --- */}
      {/* 🔹 3. Detailed Product Portfolio */}
      <div className="py-20 px-6 md:px-16">
        <div className="container mx-auto">
          <div className="md:flex md:gap-12">
            {/* Left Column: Summary & Capacity */}
            <div className="md:w-1/3 mb-8 md:mb-0 space-y-6">
              <p className="text-sm font-semibold uppercase text-orange-600 tracking-widest">
                Product Offerings
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-snug">
                A Curated Selection of <span className={accentLight}>Essential Ingredients</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We currently supply a diversified portfolio of high-demand agro and dairy products to the market, catering to food manufacturers, wholesalers, and foodservice establishments.
              </p>

              {/* Quality Highlight Block */}
              <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                <h3 className="flex items-center text-lg font-semibold text-orange-800 mb-2">
                    <Star className="w-5 h-5 mr-2" />
                    Guaranteed Purity & Freshness
                </h3>
                <p className="text-orange-700 text-sm">
                    From premium-quality soybean extraction to the meticulous processing of ICUMSA 45 sugar, our products undergo strict quality control measures.
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Product List */}
            <div className="md:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.flatMap(category => 
                category.products.map((product, pIndex) => (
                    <div key={pIndex} className="p-5 bg-gray-50 rounded-lg shadow-inner border-t-4 border-orange-600">
                        <div className="flex items-center mb-2 text-md font-bold text-gray-900">
                            {category.icon === Droplet && <Droplet className="w-4 h-4 text-orange-600 mr-2" />}
                            {category.icon === Wheat && <Wheat className="w-4 h-4 text-orange-600 mr-2" />}
                            {category.icon === Milk && <Milk className="w-4 h-4 text-orange-600 mr-2" />}
                            {product.split('(')[0].trim()}
                        </div>
                        <p className="text-gray-700 text-xs italic">
                           {/* Extracting the description from inside the parentheses */}
                           {product.includes('(') ? product.substring(product.indexOf('(') + 1, product.lastIndexOf(')')) : ''}
                        </p>
                    </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- */}
      {/* 🔹 4. Operational Commitment (Dark Section) */}
      {/* <div className="relative overflow-hidden bg-gradient-to-br from-[#1E1E2A] to-[#0B0E1A] text-white py-20 px-6 md:px-16">
        <div className="container mx-auto">
            <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase text-orange-400 tracking-widest">
                    Operational Excellence
                </p>
                <h2 className="text-4xl font-bold text-white">
                    Sourcing from Trusted <span className={accentLight}>Responsible Producers</span>
                </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                <OperationalPoint
                    icon={Droplet}
                    title="Sustainable Palm Oil Sourcing"
                    description="Our Palm Oil is sourced from sustainable and responsible producers, adhering to high quality standards."
                />
                <OperationalPoint
                    icon={Wheat}
                    title="Premium Seed Extraction"
                    description="Oils like Sunflower are extracted from premium-quality seeds, retaining natural goodness like essential fatty acids and Vitamin E."
                />
                <OperationalPoint
                    icon={Milk}
                    title="Trusted Dairy Farms"
                    description="Our Instant Milk Powder is sourced from trusted dairy farms and processed gently to preserve all essential nutrients and flavors."
                />
            </div>
        </div>
      </div> */}

      {/* --- */}
      {/* 🔹 5. Final CTA / Call to Action */}
      {/* <div className="py-16 px-6 md:px-16 bg-white">
       
        <div className="container mx-auto bg-gradient-to-r from-orange-600 to-red-700 p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Enhance Your Product Line with Our Premium Ingredients
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you are a wholesale distributor, food manufacturer, or seeking a healthier cooking alternative, our product line is the perfect fit.
          </p>
          
          <button className="flex items-center justify-center mx-auto gap-3 px-10 py-4 rounded-full bg-white text-orange-600 text-lg font-bold shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05]">
            <Mail className="w-5 h-5" />
            Inquire About Bulk Supply
          </button>
        </div>
      </div> */}
    </section>
  );
};

export default App;
