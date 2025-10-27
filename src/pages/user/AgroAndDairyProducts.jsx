import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AgroAndDairyProducts = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* 🔹 1. Hero Section (Banner) */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B0E1A] to-[#1E1E2A] text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="hover:text-orange-400 cursor-pointer">Home</span>
              <span>/</span>
              <span className="text-orange-500">Agro & Dairy</span>
            </div>

            <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#ff6600]/40 bg-gradient-to-r from-[#2a1f1f] to-[#1a1414] text-white text-sm font-medium shadow-[inset_0_0_10px_rgba(255,100,50,0.2)] hover:shadow-[0_0_10px_rgba(255,100,50,0.4)] transition-all duration-300">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Premium Bulk Supply</span>
            </button>

            <h1 className="text-3xl md:text-4xl font-bold">
              Bringing Quality Agro & Dairy Products to Your Table
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              At Zeal It, consumer delight is at the core of our business.
              We bring high-quality agro and dairy products that promote
              healthy eating and healthy living.
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
  <div className="max-w-6xl mx-auto leading-relaxed">
    <h2 className="text-2xl font-bold mb-6 text-gray-900">
      Agro and Dairy Products
    </h2>

    <p className="mb-10">
      At <b>Zeal It</b>, consumer delight is at the core of our business
      functions. Our aim is to bring joy to the lives of our valued customers,
      shoppers, and consumers. We believe in the principle of{" "}
      <b>Healthy Eating and Healthy Living</b>. We strive to bring you
      products that are of the highest quality and international standards.
      We currently supply the following items in the market:
    </p>

    {/* Product Grid */}
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">1. Palm Oil</h3>
        <p>
          Palm Oil is a true culinary gem known for its versatility and unique
          nutritional properties. Ideal for sautéing, frying, and baking, it
          infuses your dishes with a rich and flavorful touch. Sourced from
          sustainable producers, our Palm Oil meets the highest quality standards.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">2. Sunflower Oil</h3>
        <p>
          With its light color and mild taste, Sunflower Oil is a favorite among
          health-conscious consumers. Extracted from premium seeds, it retains
          essential fatty acids and Vitamin E — ideal for cooking and dressings.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">3. Soybean Oil</h3>
        <p>
          Known for its heart-healthy benefits, our Soybean Oil is extracted from
          the finest soybeans under strict quality control. A perfect fit for
          those seeking a healthier cooking alternative.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">4. Soybeans</h3>
        <p>
          A rich plant-based protein source used in food manufacturing and animal
          feed. Our soybeans are sourced from trusted suppliers and meet top
          quality standards.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">5. Corn</h3>
        <p>
          Our premium-grade Corn serves multiple industries, from food processing
          to industrial applications. It’s sourced for consistent quality,
          purity, and freshness.
        </p>
      </div>

    
      <div>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">
          6. ICUMSA 45 Grade Sugar
        </h3>
        <p>
          Premium ICUMSA 45 Sugar — pure white, low in moisture, and highly
          refined. Perfect for confectionery, beverages, and bakeries for smooth,
          superior sweetness.
        </p>
      </div>


        {/* Instant Milk Powder — below Corn */}
      <div>
        <h3 className="text-xl font-semibold text-orange-600 mb-2">
          7. Instant Milk Powder
        </h3>
        <p>
          Our Instant Milk Powder is made from trusted dairy farms and processed
          to preserve nutrients and taste. It dissolves instantly — perfect for
          households, foodservice, and manufacturing use.
        </p>
      </div>

    </div>
  </div>
</section>



    </div>
  );
};

export default AgroAndDairyProducts;








