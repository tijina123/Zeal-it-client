import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import EmailService from "../../services/email-service/EmailService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Sending form data to backend:', formData);
      const result = await EmailService.sendContactForm(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        console.log('Form submitted successfully!');
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', result.error);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white text-gray-800">
      {/* 🔹 Top Hero Section */}
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
              <span>Get in Touch</span>
            </button>

            <h1 className="text-3xl md:text-4xl font-bold">
              Let’s Build Something Great Together
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-lg">
              Reach out to us for inquiries, collaborations, or support. Our
              expert team will respond promptly to assist you.
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

      {/* 🔹 Contact Info Cards */}
      <div className="grid md:grid-cols-4 gap-6 py-16 px-6 md:px-16 bg-gray-50 text-center">
        {[
          {
            icon: <Mail className="w-6 h-6 text-orange-500" />,
            title: "Email",
            info: "sk@zeal-it.co",
          },
         {
  icon: <Phone className="w-6 h-6 text-orange-500" />,
  title: "Phone",
  info: (
    <>
      +974 44318992<br />
      +974 44319378
    </>
  ),
},

          {
            icon: <MapPin className="w-6 h-6 text-orange-500" />,
            title: "Address",
            info: "Zeal-it Trading & Contracting P.O. Box 18449, C Ring Road,Abdulla Al Kuwari Bldg.Bldg 348, 2nd flr.0ffice 14, Al Muntazah Doha-Qatar",
          },
          {
            icon: <Clock className="w-6 h-6 text-orange-500" />,
            title: "Working Hours",
            info: "Sat – Thu : 8 AM – 6 PM",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3"
          >
            <div className="bg-orange-50 p-3 rounded-full">{item.icon}</div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.info}</p>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Contact Form Section */}
      <div className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Send Us a <span className="text-orange-500">Message</span>
          </h2>
          <p className="text-gray-600">
            We’re here to answer your questions and help you with your next
            project.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-6 border border-gray-100">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 md:col-span-2"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 md:col-span-2"
          ></textarea>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="md:col-span-2 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
              <CheckCircle className="w-5 h-5" />
              <span>Message sent successfully! We'll get back to you soon.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="md:col-span-2 flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
              <AlertCircle className="w-5 h-5" />
              <span>Failed to send message. Please try again or contact us directly.</span>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            className={`md:col-span-2 py-3 rounded-lg font-medium text-white shadow-lg transition-all ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </div>

      {/* 🔹 Google Map Section */}
    <div className="py-16 bg-white px-6 md:px-16">
  <div className="max-w-5xl mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold mb-2 text-gray-900">
      Find Us on <span className="text-orange-500">Google Maps</span>
    </h2>
    <p className="text-gray-600">
      Visit our showroom or contact us for product inquiries and support.
    </p>
  </div>

  <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg border border-gray-100">
    <iframe
      title="Zeal-IT Location"
      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115460.25969562004!2d51.434724169475096!3d25.26610712845767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e45c542d60aead1%3A0xb1b0c9310f33c8d7!2sC%20Ring%20Rd%2C%20Doha!3m2!1d25.26613!2d51.5171257!5e0!3m2!1sen!2sqa!4v1761494830791!5m2!1sen!2sqa"
      width="100%"
      height="400"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0 w-full"
    ></iframe>
  </div>
</div>

    </section>
  );
};

export default Contact;
