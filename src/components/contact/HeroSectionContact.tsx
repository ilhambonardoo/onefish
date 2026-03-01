"use client";

import { motion } from "framer-motion";

const HeroSectionContact = () => {
  return (
    <section className="min-h-[60vh] flex flex-col bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-start"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-6xl text-left text-2xl font-geist font-bold uppercase text-stone-300"
          >
            Contact
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-clip-text bg-lienar-to-r text-stone-500 text-left from-stone-300 via-stone-200 to-stone-300 text-2xl font-nb uppercase font-geist font-semibold my-4"
          >
            Get In Touch With Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 w-64 bg-linear-to-r from-stone-300 to-stone-400 rounded-full"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <p className="text-stone-200 text-3xl md:text-5xl max-w-7xl text-right mt-12">
              Have questions or inquiries? Reach out to us for premium aquatic
              consultations and support.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionContact;
