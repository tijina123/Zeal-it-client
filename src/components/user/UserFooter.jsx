import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d1321] text-gray-300 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            
            <div className="bg-white rounded-full p-2 mr-2">
              <span className="text-[#0d1321] font-bold text-xl">Z</span>
            </div>
            <h2 className="text-white text-2xl font-bold">Zeal-it</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Delivering excellence across multiple industries with commitment to quality,
            innovation, and customer satisfaction.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/manpower-solution-provider" className="hover:text-orange-500 transition">Manpower Solution Provider</a></li>
            <li><a href="/real-estate-division" className="hover:text-orange-500 transition">Real Estate Division</a></li>
            <li><a href="/recycling-division" className="hover:text-orange-500 transition">Recycling Division</a></li>
            <li><a href="/facility-management" className="hover:text-orange-500 transition">Facility Management</a></li>
            <li><a href="/civil-construction" className="hover:text-orange-500 transition">Civil Construction</a></li>
            <li><a href="/bio-medical" className="hover:text-orange-500 transition">Bio Medical Trading</a></li>
            <li><a href="/agro-diary-products" className="hover:text-orange-500 transition">Agro & Dairy product</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-orange-500 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-orange-500 transition">Our Services</a></li>
            <li><a href="/projects" className="hover:text-orange-500 transition">Projects</a></li>
            <li><a href="/products" className="hover:text-orange-500 transition">Products</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin className="text-orange-500 mt-1" size={18} />
              <span>Zeal-it Trading & Contracting P.O. Box 18449, C Ring Road,Abdulla Al Kuwari Bldg.Bldg 348, 2nd flr.0ffice 14, Al Muntazah Doha-Qatar</span>
            </li>
            <li className="flex items-start space-x-2">
              <Phone className="text-orange-500 mt-1" size={18} />
              <span>+974 44318992<br />
      +974 44319378</span>
            </li>
            <li className="flex items-start space-x-2">
              <Mail className="text-orange-500 mt-1" size={18} />
              <span>sk@zeal-it.co</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-center items-center display:flex text-sm text-gray-400">
        <p>© 2025 Zeal-it. All rights reserved.</p>
        {/* <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-orange-500 transition">Sitemap</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
