import React from "react";
import { motion } from "framer-motion";

const ProjectCTA = () => {
  return (
    // New wrapper div to control max-width and center the component
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="bg-gradient-to-r from-red-600 to-orange-500 py-16 text-center text-white flex flex-col items-center justify-center rounded-lg shadow-2xl">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-4 px-4" // Added px-4 back for inner content
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Start Your Project?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 px-4" // Added px-4 back for inner content
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get in touch with our team to discuss your requirements and receive a
          customized solution tailored to your needs.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 px-4" // Added px-4 back for inner content
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
  href="tel:+97444318992"
  className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md transition hover:bg-red-600 hover:text-white hover:shadow-lg"
>
  Contact Us Now
</a>

          <a href = "/projects" className="bg-white text-red-600 font-semibold px-6 py-3 rounded-md transition hover:bg-red-600 hover:text-white hover:shadow-lg">
            View Our Projects
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectCTA;