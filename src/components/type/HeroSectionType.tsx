"use client";

import { motion } from "framer-motion";

const HeroSectionType = () => {
  return (
    <section className="relative bg-black py-10 md:py-12 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "100px" }}
          className="mt-24"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:text-6xl text-left text-2xl font-geist font-bold uppercase text-stone-300"
          >
            More Type Of Fish
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, margin: "100px" }}
            className="bg-clip-text bg-lienar-to-r text-stone-500 text-left from-stone-300 via-stone-200 to-stone-300 text-2xl font-nb uppercase font-geist font-semibold my-4"
          >
            Premium Fish Inventory
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="h-1 w-64 bg-linear-to-r from-stone-300 to-stone-400 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "100px" }}
            className="h-1 w-24 bg-lienar-to-r from-stone-400 to-stone-500 rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, margin: "100px" }}
            className="text-stone-200 text-3xl md:text-5xl max-w-7xl text-right"
          >
            High-quality fish available for both individual and bulk orders.
            Direct from trusted breeders with guaranteed freshness and health.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionType;
