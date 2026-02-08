"use client";

import { motion } from "framer-motion";
import { SlPlane } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const features = [
  {
    title: "Unrivaled Quality",
    description: "Rigorously tested for absolute perfection.",
    icon: <FaRegStar size={30} />,
  },
  {
    title: "Global Reach",
    description: "International standards, delivered worldwide.",
    icon: <SlPlane size={30} />,
  },
  {
    title: "Peak Vitality",
    description: "Robust, disease-free, and thriving specimens.",
    icon: <MdOutlineHealthAndSafety size={30} />,
  },
  {
    title: "Meticulous Care",
    description: "Curated by professional aquatic experts.",
    icon: <IoShieldCheckmarkOutline size={30} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-black">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-stone-300 to-stone-400">
              Choose Us?
            </span>
          </h2>
          <p className="text-neutral-100 text-lg">
            Quality Assured. Satisfaction Defined.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-xl backdrop-blur-sm border border-stone-400 hover:border-stone-400/50 hover:bg-neutral-100/50 transition-all duration-300 h-full">
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-linear-to-br from-stone-400/10 to-stone-500/10 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-100 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 w-12 h-1 bg-linear-to-r from-stone-300 to-stone-400 rounded-full group-hover:w-20 transition-all duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 text-lg mb-6">
            Start the Conversation.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(214, 211, 202, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-linear-to-r from-stone-400 to-stone-500 text-black font-geist font-bold rounded-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
